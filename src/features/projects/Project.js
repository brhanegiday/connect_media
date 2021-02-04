import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "100px 200px",
    backgroundColor: "#E3544A",
  },
  projectType: {
    fontFamily: "LibreBaskerville",
    fontWeight: "100",
    fontStyle: "oblique",
    color: "#a82727",
    fontSize: "24px",
  },
  projectTitle: {
    color: "white",
    fontSize: "42px",
    fontFamily: "Montserrat",
    fontWeight: "900",
    paddingTop: "30px",
  },
  gridContainer: {
    paddingTop: "100px",
  },
  gridTitle: {
    fontSize: "11px",
    fontFamily: "Montserrat",
    paddingBottom: "20px",
    color: "#a82727",
  },
  gridContent: {
    fontSize: "12px",
    fontFamily: "Montserrat",
    fontWeight: "500",
    color: "#fff",
  },

  /*** Image Banner section ****/
  bannerImage: {
    display: "grid",
    placeItems: "center",
    objectFit: "center",
    backgroundAttachment: "fixed",
  },

  /*** Zenith Arena Section ****/
  zenithArenaSection: {
    padding: "100px 200px",
    placeItems: "center",
  },
  leftGridItem: {
    fontSize: "42px",
    fontWeight: "900",
    fontFamily: "Montserrat",
    color: "#1c1b20",
  },
  rightGridItem: {
    fontSize: "14px",
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#888888",
    lineHeight: "1.7",
  },
  /******project Review */
  projectReview: {
    backgroundColor: "#eee",
    padding: "100px 200px",
  },
  projectReviewContainer: {
    padding: "100px 0",
    display: "grid",
    placeItems: "center",
  },
  gridItemTitle: {
    fontSize: "42px",
    fontWeight: "900",
    fontFamily: "Montserrat",
    color: "#1c1b20",
    paddingBottom: "30px",
    placeItems: "center",
  },
  gridItemDescription: {
    fontSize: "14px",
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#888888",
    lineHeight: "1.7",
    // paddingRight: "200px",
  },
  gridItemContainer: {
    // display: "grid",
    placeItems: "center",
    paddingRight: "200px",
  },
}));

function Project() {
  const classes = useStyles();
  return (
    <>
      <div style={{ backgroundColor: "#f8f8f8" }}>
        <section className={classes.root}>
          <Typography variant="h3" className={classes.projectType}>
            Website
          </Typography>
          <Typography variant="h3" className={classes.projectTitle}>
            Zenith Arena de Lille <br />
            <span style={{ color: "#000" }}>
              {" "}
              Discover the Zenith experience.
            </span>
          </Typography>
          <Grid container spacing={10} className={classes.gridContainer}>
            <Grid item xs={12} md={4}>
              <Typography variant="body2" className={classes.gridTitle}>
                Goal.
              </Typography>
              <Typography variant="body1" className={classes.gridContent}>
                The Zenith Arena in Lille is one of the main concert and event
                halls in the Hauts-de-France. After nearly ten years of
                collaboration, we had carte blanche to create the new site.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body2" className={classes.gridTitle}>
                Answer.
              </Typography>
              <Typography variant="body1" className={classes.gridContent}>
                We wanted to capitalize on the "experience" aspect that such a
                room can provide to its visitors. In addition to that, we wanted
                to go against the current of competing sites: to offer a site
                based on the list of events by maximizing access to the most
                requested content.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body2" className={classes.gridTitle}>
                What we did.
              </Typography>
              <Typography variant="body1" className={classes.gridContent}>
                Digital strategy User experience Art direction & Design Web
                development
              </Typography>
            </Grid>
          </Grid>
        </section>
        <section id="imageSection">
          <Image
            src="/projects/project-1.jpg"
            className={classes.bannerImage}
            layout="responsive"
            width="100%"
            height="40%"
          />
        </section>
        <section>
          <Grid container spacing={10} className={classes.zenithArenaSection}>
            <Grid item xs={12} md={6} className={classes.leftGridItem}>
              The Zenith Arena Experience.
            </Grid>
            <Grid item xs={12} md={6} className={classes.rightGridItem}>
              Upon arrival on the site, the visitor is immersed in the
              atmosphere with an immersive video. Then, he just has to scroll to
              find out about upcoming events. It’s simple, direct, and
              effective.
            </Grid>
          </Grid>
        </section>
        <section>
          <Container className={classes.projectReview}>
            <Image
              src="/projects/project-4.jpg"
              layout="responsive"
              width="60%"
              height="40%"
            />
          </Container>
        </section>
        <section>
          <Container className={classes.projectReviewContainer}>
            <Grid container spacing={10} className={classes.gridItemContainer}>
              <Grid item xs={12} md={6}>
                <Image
                  src="/projects/project-4.jpg"
                  layout="responsive"
                  width="40%"
                  height="45%"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" className={classes.gridItemTitle}>
                  A well thought-out menu.
                </Typography>
                <Typography className={classes.gridItemDescription}>
                  Rather than offering basic navigation, we focused on what the
                  visitor really want at the time of his visit. He can consult
                  the events of the week, the month, or next month, or discover
                  how to organize himself to get the most out of his experience
                  at the Zenith.
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={10} className={classes.zenithArenaSection}>
              <Grid item xs={12} md={6} className={classes.leftGridItem}>
                Events First.
              </Grid>
              <Grid item xs={12} md={6} className={classes.rightGridItem}>
                <Typography variant="body1">
                  The event catalogue is the central element of the site. This
                  page has been designed to maximize the visibility of each
                  event, and that’s all. As you roll over, the artist’s name
                  changes to the date of the event. Thus, all the important
                  information of the event is perfectly highlighted for a direct
                  understanding.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section>
          <Image
            src="/projects/project-8.jpg"
            className={classes.bannerImage}
            layout="responsive"
            width="100%"
            height="60%"
          />
        </section>
        <section>
          <Container className={classes.projectReviewContainer}>
            <Grid container spacing={6} style={{ placeItems: "center" }}>
              <Grid item xs={12} md={6} style={{ paddingLeft: "16%" }}>
                <Typography
                  variant="body1"
                  className={classes.gridItemDescription}
                >
                  To facilitate navigation among the dozens of events scheduled,
                  the user can, via a modern and functional drop-down menu,
                  choose a month or a period. This directly updates the event
                  list, and remains fixed at the scroll for permanent access.
                  Thus, the visualization of the catalogue is greatly
                  simplified.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Image
                  src="/projects/project-4.jpg"
                  layout="responsive"
                  width="40%"
                  height="45%"
                />
              </Grid>
            </Grid>
            <Grid container spacing={10} className={classes.zenithArenaSection}>
              <Grid item xs={12} md={6} className={classes.leftGridItem}>
                Impacting event pages.
              </Grid>
              <Grid item xs={12} md={6} className={classes.rightGridItem}>
                <Typography variant="body1">
                  Like the events catalogue, event pages are purged of all other
                  content. The objective is to have an impactful page,
                  highlighting the visuals and content for an easy and fluid
                  reading. Each event can be accompanied by variable content,
                  such as text, images or videos.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section>
          <Container
            className={classes.projectReview}
            style={{ backgroundColor: "#95C8E6" }}
          >
            <Image
              src="/projects/project-4.jpg"
              layout="responsive"
              width="60%"
              height="40%"
            />
          </Container>
        </section>
        <section>
          <Image
            src="/projects/project-9.jpg"
            className={classes.bannerImage}
            layout="responsive"
            width="100%"
            height="60%"
          />
        </section>
        <section>
          <Container className={classes.projectReviewContainer}>
            <Grid container spacing={8} style={{ placeItems: "center" }}>
              <Grid item xs={12} md={6} style={{ paddingLeft: "16%" }}>
                <Typography variant="h3" className={classes.gridItemTitle}>
                  Be well prepared.
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.gridItemDescription}
                >
                  A concert at the Zenith in Lille is an event, one of the main
                  events of the year for many. In order to provide clear and
                  direct content for a very broad target audience, we have
                  redesigned the content to extract essential elements such as
                  access, security, parking or organization, and condense them
                  into a single location. The aim was to clearly answer
                  recurring questions such as “What time should I arrived.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Image
                  src="/projects/project-4.jpg"
                  layout="responsive"
                  width="40%"
                  height="45%"
                />
              </Grid>
            </Grid>
            <Grid container spacing={10} className={classes.zenithArenaSection}>
              <Grid item xs={12} md={6} className={classes.leftGridItem}>
                Clear and accessible content.
              </Grid>
              <Grid item xs={12} md={6} className={classes.rightGridItem}>
                This is the whole purpose of the site: to provide pages with
                clear and easy to read content. Each page has been made with a
                simple but very clean structure, in order to highlight this
                content designed for those who will read it.
              </Grid>
            </Grid>
          </Container>
        </section>
        <section>
          <Container>
            <Image
              src="/projects/project-7.jpg"
              className={classes.bannerImage}
              layout="responsive"
              width="100%"
              height="45%"
            />
            <Grid container spacing={10} className={classes.zenithArenaSection}>
              <Grid item xs={12} md={6} className={classes.leftGridItem}>
                A trace of their passage.
              </Grid>
              <Grid item xs={12} md={6} className={classes.rightGridItem}>
                The Zenith used to photograph each artist that comes, and have
                them signed. To honour this initiative and make them visible to
                visitors, we have created a dedicated page.
              </Grid>
            </Grid>
          </Container>
        </section>
        <section>
          <Container
            className={classes.projectReview}
            style={{ backgroundColor: "#3C3B3C" }}
          >
            <Image
              src="/projects/project-4.jpg"
              layout="responsive"
              width="60%"
              height="40%"
            />
          </Container>
          <Grid container spacing={10} className={classes.zenithArenaSection}>
            <Grid item xs={12} md={6} className={classes.leftGridItem}>
              Suitable for mobile.
            </Grid>
            <Grid item xs={12} md={6} className={classes.rightGridItem}>
              The moving target is a target to be preferred on this type of
              support, but not only. It is also necessary to think about how the
              visitor will be able to navigate through the long list of events.
              Everything has been designed to make this visit easier, whether on
              a smartphone or on a tablet. Result: a mobile traffic that goes
              from 20 to 60%!
            </Grid>
          </Grid>
        </section>
        <section style={{ backgroundColor: "#ED4344" }}>
          <Image
            src="/projects/project-10.jpg"
            className={classes.bannerImage}
            layout="responsive"
            width="90%"
            height="37%"
          />
        </section>
        <secton
          style={{
            backgroundColor: "#1C1B20",
            padding: "100px 150px",
            display: "grid",
            placeItems: "center",
            color: "#fff",
            fontFamily: "Montserrat",
          }}
        >
          <div>
            <Typography variant="h4">See the site</Typography>
          </div>
        </secton>
      </div>
    </>
  );
}

export default Project;
