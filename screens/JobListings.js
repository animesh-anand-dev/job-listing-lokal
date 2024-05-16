import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const JobListings = () => {
  const [jobData, setJobData] = useState();

  useEffect(() => {
    const data = getJobs();
    setJobData(data);
    console.log(jobData);
  }, [jobData]);
  return (
    <View styles={style.rootContainer}>
      <FlatList
        data={jobData}
        renderItem={<JobListings jobs={items} />}
      />
    </View>
  );
};

export default JobListings;

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
