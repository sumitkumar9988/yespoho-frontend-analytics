/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import date from "date-and-time";
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
import { getDefaultNormalizer } from "@testing-library/react";
const baseURL = process.env.REACT_APP_API_URL;

// {
//   "id": "7dc383d8-4e65-496e-b57d-e26606cb0789",
//   "name": "e401f3a984ea392c80fe917e884ca912",
//   "product_id": "14461",
//   "last_activity": "color_change_red",
//   "user_id": "e401f3a984ea392c80fe917e884ca912",
//   "analytics_attribute": {
//       "referrer": "direct",
//       "browser_timezone": -5.5,
//       "browser_language": "en-IN",
//       "landing_page": "http://127.0.0.1:5500/main.html",
//       "screen_height": 900,
//       "screen_width": 1440,
//       "last_visit": 1661452628,
//       "pageviews": 1,
//       "first_website_visit": "2022-08-25T18:36:05.954Z",
//       "product_id": "",
//       "visits": [
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "931a",
//               "date": "2022-08-25T18:36:07.017Z"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "7cfb",
//               "date": "2022-08-25T18:36:13.657Z",
//               "index": 1,
//               "saree_pattern": "pattern2",
//               "saree_color": "red",
//               "blouse_Color": "red",
//               "activity": "color_change_red"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "8ac5",
//               "date": "2022-08-25T18:36:16.056Z",
//               "index": 2,
//               "saree_pattern": "pattern2",
//               "saree_color": "black",
//               "blouse_Color": "red",
//               "activity": "color_change_black"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "6b50",
//               "date": "2022-08-25T18:36:16.856Z",
//               "index": 3,
//               "saree_pattern": "pattern3",
//               "saree_color": "black",
//               "blouse_Color": "red",
//               "activity": "pattern_change_pattern_3"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "7c48",
//               "date": "2022-08-25T18:36:17.669Z",
//               "index": 4,
//               "saree_pattern": "pattern1",
//               "saree_color": "black",
//               "blouse_Color": "red",
//               "activity": "pattern_change_pattern_1"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "fcdc",
//               "date": "2022-08-25T18:36:18.386Z",
//               "index": 5,
//               "saree_pattern": "pattern2",
//               "saree_color": "black",
//               "blouse_Color": "red",
//               "activity": "pattern_change_pattern_2"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "f091",
//               "date": "2022-08-25T18:36:20.457Z",
//               "index": 6,
//               "saree_pattern": "pattern2",
//               "saree_color": "blue",
//               "blouse_Color": "red",
//               "activity": "color_change_blue"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "207d",
//               "date": "2022-08-25T18:36:21.185Z",
//               "index": 7,
//               "saree_pattern": "pattern3",
//               "saree_color": "blue",
//               "blouse_Color": "red",
//               "activity": "pattern_change_pattern_3"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "e40e",
//               "date": "2022-08-25T18:36:22.271Z",
//               "index": 8,
//               "saree_pattern": "pattern3",
//               "saree_color": "blue",
//               "blouse_Color": "red",
//               "activity": "save"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "94ad",
//               "date": "2022-08-25T18:36:44.552Z",
//               "index": 9,
//               "saree_pattern": "pattern3",
//               "saree_color": "red",
//               "blouse_Color": "red",
//               "activity": "color_change_red"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "b68b",
//               "date": "2022-08-25T18:36:50.220Z",
//               "index": 10,
//               "saree_pattern": "pattern3",
//               "saree_color": "blue",
//               "blouse_Color": "red",
//               "activity": "color_change_blue"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "c9ca",
//               "date": "2022-08-25T18:36:51.284Z",
//               "index": 11,
//               "saree_pattern": "pattern3",
//               "saree_color": "black",
//               "blouse_Color": "red",
//               "activity": "color_change_black"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "1742",
//               "date": "2022-08-25T18:36:54.319Z",
//               "index": 12,
//               "saree_pattern": "pattern2",
//               "saree_color": "black",
//               "blouse_Color": "red",
//               "activity": "pattern_change_pattern_2"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "5377",
//               "date": "2022-08-25T18:36:54.819Z",
//               "index": 13,
//               "saree_pattern": "pattern1",
//               "saree_color": "black",
//               "blouse_Color": "red",
//               "activity": "pattern_change_pattern_1"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "7d99",
//               "date": "2022-08-25T18:36:55.635Z",
//               "index": 14,
//               "saree_pattern": "pattern1",
//               "saree_color": "red",
//               "blouse_Color": "red",
//               "activity": "color_change_red"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "7257",
//               "date": "2022-08-25T18:36:56.552Z",
//               "index": 15,
//               "saree_pattern": "pattern1",
//               "saree_color": "blue",
//               "blouse_Color": "red",
//               "activity": "color_change_blue"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "0a25",
//               "date": "2022-08-25T18:36:57.968Z",
//               "index": 16,
//               "saree_pattern": "pattern1",
//               "saree_color": "blue",
//               "blouse_Color": "red",
//               "activity": "save"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "d9d9",
//               "date": "2022-08-25T18:36:59.702Z",
//               "index": 17,
//               "saree_pattern": "pattern1",
//               "saree_color": "blue",
//               "blouse_Color": "red",
//               "activity": "share"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "07b8",
//               "date": "2022-08-25T18:37:02.656Z",
//               "index": 18,
//               "saree_pattern": "pattern2",
//               "saree_color": "blue",
//               "blouse_Color": "red",
//               "activity": "pattern_change_pattern_2"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "cd11",
//               "date": "2022-08-25T18:37:03.355Z",
//               "index": 19,
//               "saree_pattern": "pattern3",
//               "saree_color": "blue",
//               "blouse_Color": "red",
//               "activity": "pattern_change_pattern_3"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "1223",
//               "date": "2022-08-25T18:37:06.019Z",
//               "index": 20,
//               "saree_pattern": "pattern3",
//               "saree_color": "black",
//               "blouse_Color": "red",
//               "activity": "color_change_black"
//           },
//           {
//               "referrer": "direct",
//               "browser_timezone": -5.5,
//               "browser_language": "en-IN",
//               "landing_page": "http://127.0.0.1:5500/main.html",
//               "screen_height": 900,
//               "screen_width": 1440,
//               "id": "a94a",
//               "date": "2022-08-25T18:37:08.218Z",
//               "index": 21,
//               "saree_pattern": "pattern3",
//               "saree_color": "red",
//               "blouse_Color": "red",
//               "activity": "color_change_red"
//           }
//       ],
//       "converted_at": "2022-08-25T18:37:08.219Z",
//       "conversion_page": "http://127.0.0.1:5500/main.html",
//       "visits_at_conversion": 22,
//       "pageviews_before_conversion": 1
//   },
//   "last_activity_at": "2022-08-25T18:37:08.219Z",
//   "createdAt": "2022-08-25T18:36:07.190Z",
//   "updatedAt": "2022-08-25T18:37:08.393Z"
// }

function Dashboard() {
  const [analytics, setAnalytics] = useState(null);
  const [name, setName] = useState(null);
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
        return axios.get(`${baseURL}/redirect/user-data`, {
          headers: {
            Merchantkey: `yespoho2022sandbox`,
            Authkey: analytics.user_id,
            "Content-Type": "application/json"
          }
        });
      })
      .then((response) => {
        setName(response.data.guest_data.first_name);
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
            {/* <InfoCard title="name" value={analytics?.name}></InfoCard> */}
            <InfoCard title="Name" value={name}></InfoCard>
            <InfoCard title="id" value={analytics?.id}></InfoCard>
            <InfoCard title="user id" value={analytics?.user_id}></InfoCard>
            <InfoCard
              title="Last Activity"
              value={analytics?.last_activity}
            ></InfoCard>
            {analytics && (
              <InfoCard
                title="First website visit"
                value={date.format(
                  new Date(analytics.last_activity_at),
                  "YYYY/MM/DD HH:mm:ss"
                )}
              ></InfoCard>
            )}
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
              title="Time zone"
              value={analytics?.analytics_attribute.browser_timezone}
            ></InfoCard>
            {analytics && (
              <InfoCard
                title="First website visit"
                value={date.format(
                  new Date(analytics.analytics_attribute.first_website_visit),
                  "YYYY/MM/DD HH:mm:ss"
                )}
              ></InfoCard>
            )}
          </div>

          <PageTitle>Visits</PageTitle>
          <div className="pb-20">
            <TableContainer>
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>Index</TableCell>
                    <TableCell>Saree pattern</TableCell>
                    <TableCell>Blouse Color</TableCell>
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
                        <span className="text-sm">{visit.blouse_Color}</span>
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
                          {date.format(
                            new Date(visit.date),
                            "YYYY/MM/DD HH:mm:ss"
                          )}
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
