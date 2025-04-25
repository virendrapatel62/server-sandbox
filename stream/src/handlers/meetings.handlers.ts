import {
  createMeeting,
  getMeeting,
  getMeetings,
} from "@/services/dyte/meetings/meetings.service";
import { HttpStatusCode } from "axios";
import { RequestHandler, Router } from "express";
import { STATUS_CODES } from "http";
import * as yup from "yup";

const meetingRouter = Router();

const getMeetingsHandler: RequestHandler = async (request, response) => {
  const meetings = await getMeetings();
  response.json(meetings);
};

const getMeetingHandler: RequestHandler = async (request, response) => {
  const meeting = await getMeeting(request.params.id);
  response.json(meeting);
};

const createMeetingHandler: RequestHandler = async (request, response) => {
  const meetingBodyValidationSchema = yup.object().shape({
    title: yup
      .string()
      .required("title is required")
      .min(5, "title must be at least 3 characters long"),
  });

  try {
    const values = await meetingBodyValidationSchema.validate(request.body, {
      abortEarly: false,
    });

    const meeting = await createMeeting({
      title: values.title,
    });
    response.status(HttpStatusCode.Created).json(meeting);
    return;
  } catch (error) {
    response.status(HttpStatusCode.BadRequest).json(error);
  }
};

meetingRouter.post("/", createMeetingHandler);
meetingRouter.get("/", getMeetingsHandler);
meetingRouter.get("/:id", getMeetingHandler);

export { meetingRouter };
