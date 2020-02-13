// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ApexCharts from "apexcharts";

// eslint-disable-next-line no-unused-vars
//import { Container } from "./styles";
// eslint-disable-next-line no-unused-vars
import api from "../services/api";
import Chart from "../../src/components/Chart/index.js";
import Semigauge from "../components/Chart/Semigauge/index";
import Gradient from "../components/Chart/Gradient";
import Zoomable from "../components/Chart/Zoomable";

const Browse = () => {
  const [username] = useState("admin");
  const [password] = useState("admin");
  const [landingPage, setLandingPage] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    api
      .post("api/token/", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        username,
        password,
      })
      .then(function(response) {
        //setToken(response.data.access);
        const token = response.data.access;

        console.log(token);
        api
          .get("lysimeters/", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(response => {
            console.log("RESPONSE: ", [response.data.results]);
            [response.data].map(item => {
              console.log("RESPONSE: ", item);
              return setItems(...items, item.results);
            });
          })
          .catch(error => {
            console.log(error);
          });

        setLandingPage(true);
      })
      .catch(error => {
        console.log(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return landingPage ? (
    <>
      <Semigauge />
      <Gradient />
      <Zoomable />
    </>
  ) : (
    <>XXXXX</>
  );
};

export default Browse;
