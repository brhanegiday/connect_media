import React, { useEffect } from "react";
import apiCall from "services/ApiService";

export default function test() {
  useEffect(() => {
    apiCall("te", {
      url: "http://localhost:1337/institutions",
      method: "Get",
      onSuccess: (data) => console.log("data", data),
      onError: (error) => console.log("error", error),
    });
  }, []);

  return <div>test page</div>;
}
