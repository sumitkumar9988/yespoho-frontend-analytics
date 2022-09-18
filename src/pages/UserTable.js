/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
// import InfoCard from "../components/Cards/InfoCard";
import { Link } from "react-router-dom";
import PageTitle from "../components/Typography/PageTitle";
// import { PeopleIcon } from "../icons";
// import RoundIcon from "../components/RoundIcon";
// import response from "../utils/demo/dashboard.json";
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

function Dashboard() {
  // pagination setup
  const [analytics, setAnalytics] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);

  const getAnalytics = () => {
    axios
      .get(`${baseURL}/analytics/byuser`, {
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
      <PageTitle>Most Visited Product</PageTitle>
      {/* <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Last 24-hour" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>
        <InfoCard title="Last 7days" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>
        <InfoCard title="Last 30days" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>
        <InfoCard title="Total User till date" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>
      </div> */}

      <div className="pb-20">
        <TableContainer>
          <Table>
            <TableHeader>
              <tr>
                <TableCell>User ID</TableCell>
                <TableCell>Total User</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {analytics?.map((user, i) => (
                <TableRow key={i}>
                  {/* <Link className="w-full" to={`/app/user/${user.id}`}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                    
                          <p className="font-semibold">{user.name}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {user.job}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                  </Link> */}

                  <TableCell>
                    <Badge>{user.user_id}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge>{user.count}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Dashboard;

//
// {r.name}
// </Link>
