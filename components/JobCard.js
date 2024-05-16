import axios from "axios";
import React, { useEffect, useState } from "react";
import { getJobs } from "../util/services";

const JobCard = ({ items }) => {
  return (
    <View>
      <View>
        <Text>Job Title</Text>
        <View>
          <View>
            <Text>Job Role</Text>
            <Text>Care Takers</Text>
            <Text>Full Time</Text>
          </View>
          <View>
            <Text>Qualification</Text>
            <Text>Not Required</Text>
          </View>
          <View>
            <Text>Job Place</Text> <Text>Hyderabad</Text>
          </View>
          <View>
            <Text>Salary</Text>
          </View>
          <View>
            <Text>Expereience</Text>
            <Text>Less than 1 year</Text>
          </View>
          <View>
            <Text>Company Name</Text>
            <Text>Satyam Home Care Services</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default JobCard;
