module.exports = {
  name: "today",
  frequency: "hourly",
  query: {
    dimensions: [{ name: "date" }, { name: "hour" }, { name: "yearMonth" }],
    metrics: [
      { name: "sessions" },
      { name: "totalUsers" },
      { name: "activeUsers" },
    ],
    dateRanges: [{ startDate: "today", endDate: "today" }],
  },
  meta: {
    name: "Today",
    description: "Today's visits for all sites.",
  },
};
