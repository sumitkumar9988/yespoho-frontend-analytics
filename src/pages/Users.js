/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import InfoCard from "../components/Cards/InfoCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PageTitle from "../components/Typography/PageTitle";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  Badge
} from "@windmill/react-ui";
const baseURL = process.env.REACT_APP_API_URL;

// const data = {
//   id: "1",
//   user_id: "1",
//   name: "John Doe",
//   last_activity: "succuss",
//   last_activity_time: "10:00",
//   attributes: {
//     referrer: "direct",
//     browser_timezone: -5.5,
//     browser_language: "en-GB",
//     landing_page: "http://localhost:3001/",
//     screen_height: 900,
//     screen_width: 1440,
//     last_visit: 1660518962,
//     pageviews: 4,
//     first_website_visit: "2022-08-12T22:33:10.868Z",
//     sign_up_button: "green-button",
//     converted_at: "2022-08-12T22:33:10.868Z",
//     conversion_page: "http://localhost:3001/",
//     visits_at_conversion: 0,
//     pageviews_before_conversion: 1,
//     visits: [
//       {
//         id: 1,
//         referrer: "direct",
//         browser_timezone: -5.5,
//         browser_language: "en-GB",
//         landing_page: "http://localhost:3001/",
//         screen_height: 900,
//         screen_width: 1440,
//         date: "3/10/2022",
//         index: 1,
//         saree_pattern: "l2",
//         saree_color: "green",
//         blouse_Color: "sss",
//         activity: "save"
//       },
//       {
//         id: 2,
//         referrer: "direct",
//         browser_timezone: -5.5,
//         browser_language: "en-GB",
//         landing_page: "http://localhost:3001/",
//         screen_height: 900,
//         screen_width: 1440,
//         date: "3/23/2022",
//         index: 2,
//         saree_pattern: "l3",
//         saree_color: "red",
//         activity: "success"
//       },
//       {
//         id: 3,
//         referrer: "direct",
//         browser_timezone: -5.5,
//         browser_language: "en-GB",
//         landing_page: "http://localhost:3001/",
//         screen_height: 900,
//         screen_width: 1440,
//         date: "9/26/2021",
//         index: 3,
//         saree_pattern: "l1",
//         saree_color: "blue",
//         activity: "success"
//       },
//       {
//         id: 4,
//         referrer: "direct",
//         browser_timezone: -5.5,
//         browser_language: "en-GB",
//         landing_page: "http://localhost:3001/",
//         screen_height: 900,
//         screen_width: 1440,
//         date: "1/15/2022",
//         index: 4,
//         saree_pattern: "l2",
//         saree_color: "blue",
//         activity: "exploring"
//       },
//       {
//         id: 5,
//         referrer: "direct",
//         browser_timezone: -5.5,
//         browser_language: "en-GB",
//         landing_page: "http://localhost:3001/",
//         screen_height: 900,
//         screen_width: 1440,
//         date: "10/12/2021",
//         index: 5,
//         saree_pattern: "l3",
//         saree_color: "blue",
//         activity: "success"
//       },
//       {
//         id: 6,
//         referrer: "direct",
//         browser_timezone: -5.5,
//         browser_language: "en-GB",
//         landing_page: "http://localhost:3001/",
//         screen_height: 900,
//         screen_width: 1440,
//         date: "3/30/2022",
//         index: 6,
//         saree_pattern: "l1",
//         saree_color: "blue",
//         activity: "success"
//       },
//       {
//         id: 7,
//         referrer: "direct",
//         browser_timezone: -5.5,
//         browser_language: "en-GB",
//         landing_page: "http://localhost:3001/",
//         screen_height: 900,
//         screen_width: 1440,
//         date: "11/25/2021",
//         index: 7,
//         saree_pattern: "l3",
//         saree_color: "red",
//         activity: "share"
//       },
//       {
//         id: 8,
//         referrer: "direct",
//         browser_timezone: -5.5,
//         browser_language: "en-GB",
//         landing_page: "http://localhost:3001/",
//         screen_height: 900,
//         screen_width: 1440,
//         date: "6/21/2022",
//         index: 8,
//         saree_pattern: "l3",
//         saree_color: "blue",
//         activity: "success"
//       },
//       {
//         id: 9,
//         referrer: "direct",
//         browser_timezone: -5.5,
//         browser_language: "en-GB",
//         landing_page: "http://localhost:3001/",
//         screen_height: 900,
//         screen_width: 1440,
//         date: "4/14/2022",
//         index: 9,
//         saree_pattern: "l3",
//         saree_color: "red",
//         activity: "success"
//       },
//       {
//         id: 10,
//         referrer: "direct",
//         browser_timezone: -5.5,
//         browser_language: "en-GB",
//         landing_page: "http://localhost:3001/",
//         screen_height: 900,
//         screen_width: 1440,
//         date: "5/13/2022",
//         index: 10,
//         saree_pattern: "l1",
//         saree_color: "red",
//         activity: "share"
//       },
//       {
//         id: 11,
//         referrer: "direct",
//         browser_timezone: -5.5,
//         browser_language: "en-GB",
//         landing_page: "http://localhost:3001/",
//         screen_height: 900,
//         screen_width: 1440,
//         date: "6/26/2022",
//         index: 11,
//         saree_pattern: "l1",
//         saree_color: "green",
//         activity: "save"
//       },
//       {
//         id: 12,
//         referrer: "direct",
//         browser_timezone: -5.5,
//         browser_language: "en-GB",
//         landing_page: "http://localhost:3001/",
//         screen_height: 900,
//         screen_width: 1440,
//         date: "9/1/2021",
//         index: 12,
//         saree_pattern: "l1",
//         saree_color: "blue",
//         activity: "exploring"
//       }
//     ]
//   }
// };

function Dashboard() {
  const [analytics, setAnalytics] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);

  let { id } = useParams();

  console.log("id", id);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getAnalytics = () => {
    axios
      .get(`${baseURL}/analytics/${id}`, {
        headers: {
          "x-access-token": `${
            JSON.parse(localStorage.getItem("user"))?.accessToken
          }`,

          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        setAnalytics(response.data);
        console.log(analytics);
      })
      .catch((error) => {
        setError(error);
        console.log(error.message);
      })
      .finally(() => {
        setIsLoaded(false);
      });
  };
  React.useEffect(() => {
    getAnalytics();
  }, [isLoaded]);

  const getStatus = (status) => {
    switch (status) {
      case "exploring":
        return "neutral";
      case "success":
        return "success";
      case "shared":
        return "primary";
      case "save":
        return "neutral";
      default:
        return "neutral";
    }
  };

  const { user: authUser } = useSelector((x) => x.auth);
  console.log("protected route", authUser);
  if (!authUser) {
    // not logged in so redirect to login page with the return url
    window.location.href = "/";
  }

  return (
    <>
      {analytics && (
        <div>
          <div className="grid gap-6 mt-8 mb-8 md:grid-cols-2 xl:grid-cols-4">
            <InfoCard title="name" value={analytics?.name}></InfoCard>
            <InfoCard title="id" value={analytics?.id}></InfoCard>
            <InfoCard title="user id" value={analytics?.user_id}></InfoCard>
            <br />
            <InfoCard
              title="Last Activity"
              value={analytics?.last_activity}
            ></InfoCard>
            <InfoCard
              title="Last Activity time"
              value={analytics?.last_activity_time}
            ></InfoCard>
            <InfoCard
              title="Screen Size"
              value={`${analytics?.analytics_attribute.screen_width}*${analytics.analytics_attribute.screen_height}`}
            ></InfoCard>
            <InfoCard
              title="Browser language"
              value={analytics?.analytics_attribute.browser_language}
            ></InfoCard>
            <InfoCard
              title="Total visit"
              value={analytics?.analytics_attribute.pageviews}
            ></InfoCard>{" "}
            <InfoCard
              title="Total activity"
              value={analytics?.analytics_attribute.visits_at_conversion}
            ></InfoCard>
            <InfoCard
              title="First website visit"
              value={analytics?.analytics_attribute.first_website_visit}
            ></InfoCard>
          </div>

          <PageTitle>Visits</PageTitle>
          <div className="pb-20">
            <TableContainer>
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>Index</TableCell>
                    <TableCell>Saree pattern</TableCell>
                    <TableCell>saree Color</TableCell>
                    <TableCell>Activity</TableCell>
                    <TableCell>Date</TableCell>
                  </tr>
                </TableHeader>
                <TableBody>
                  {analytics?.analytics_attribute.visits.map((visit, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="flex items-center text-sm">
                          {/* <Avatar className="hidden mr-3 md:block" src={user.avatar} alt="User image" /> */}
                          <div>
                            <p className="font-semibold">{visit.index}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">{visit.saree_pattern}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">{visit.saree_color}</span>
                      </TableCell>

                      <TableCell>
                        <Badge type={getStatus(visit.activity)}>
                          {visit.activity}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">
                          {new Date(visit.date).toLocaleDateString()}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
