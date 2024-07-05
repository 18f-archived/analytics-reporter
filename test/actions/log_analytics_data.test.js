const expect = require("chai").expect;
const sinon = require("sinon");
const LogAnalyticsData = require("../../src/actions/log_analytics_data");

describe("LogAnalyticsData", () => {
  let context;
  let subject;

  beforeEach(() => {
    subject = new LogAnalyticsData();
  });

  describe(".handles", () => {
    describe("when appConfig.shouldLogAnalyticsData is true", () => {
      beforeEach(() => {
        context = {
          appConfig: { shouldLogAnalyticsData: true },
        };
      });

      it("returns true", () => {
        expect(subject.handles(context)).to.equal(true);
      });
    });

    describe("when appConfig.shouldLogAnalyticsData is false", () => {
      beforeEach(() => {
        context = {
          appConfig: { shouldLogAnalyticsData: false },
        };
      });

      it("returns false", () => {
        expect(subject.handles(context)).to.equal(false);
      });
    });
  });

  describe(".executeStrategy", () => {
    const infoLogSpy = sinon.spy();
    const formattedAnalyticsData = { foo: "bar" };

    beforeEach(async () => {
      infoLogSpy.resetHistory();
      context = {
        formattedAnalyticsData: formattedAnalyticsData,
        logger: { debug: () => {}, info: infoLogSpy },
        reportappConfig: { name: "test" },
      };
      await subject.executeStrategy(context);
    });

    it("calls logger.info with the formatted analytics data", () => {
      expect(infoLogSpy.calledWith(formattedAnalyticsData)).to.equal(true);
    });
  });
});
