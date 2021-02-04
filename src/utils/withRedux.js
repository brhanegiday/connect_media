import React from "react";
import PropTypes from "prop-types";

export const defaultConfig = {
  storeKey: "__NEXT_REDUX_STORE__",
  serializeState: (state) => state,
  deserializeState: (state) => state,
  isServerSideRendering: true,
};

function getIsServer() {
  return typeof window === "undefined";
}

function serveStore({ seriralizedState, config, ctx, makeStore }) {
  const { deserializeState, storeKey } = { ...defaultConfig, ...config };

  const createStore = () =>
    makeStore({
      preloadedState: deserializeState(seriralizedState),
      ...ctx,
      ...config,
    });

  // always create store if server
  if (getIsServer()) return createStore();

  // reuse store if client
  window[storeKey] = window[storeKey] || createStore();

  return window[storeKey];
}

function withRedux({ makeStore, ...opitonalConfig }) {
  const config = {
    ...defaultConfig,
    ...opitonalConfig,
  };

  return (App) => {
    const WrappedApp = ({ initialProps, initialState, ...props }) => {
      const store = serveStore({
        seriralizedState: initialState,
        config,
        makeStore,
      });

      // eslint-disable-next-line react/jsx-props-no-spreading
      return <App {...props} {...initialProps} store={store} />;
    };
    WrappedApp.propTypes = {
      initialProps: PropTypes.any,
      initialState: PropTypes.any,
    };
    if (config.isServerSideRendering || App.getInitialProps) {
      WrappedApp.getInitialProps = async (appCtx) => {
        const store = serveStore({ ctx: appCtx.ctx, makeStore });

        // eslint-disable-next-line no-param-reassign
        appCtx.ctx.store = store;

        const initialProps =
          typeof App.getInitialProps === "function"
            ? await App.getInitialProps.call(App, appCtx)
            : {};

        return {
          initialProps,
          initialState: config.serializeState(store.getState()),
        };
      };
    }

    return WrappedApp;
  };
}

export default withRedux;
