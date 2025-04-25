import { dyteHttpClient } from "@/utils/http/dyte.http";
import { URLS } from "../urls";
import { TCreateMeetingParams } from "./meetings.types";

export function createMeeting(params: TCreateMeetingParams) {
  return dyteHttpClient.post(URLS.CREATE_MEETING, params);
}

export function getMeetings() {
  return dyteHttpClient.get(URLS.GET_MEETINGS);
}

export function getMeeting(id: string) {
  return dyteHttpClient.get(`${URLS.GET_MEETINGS}/${id}`);
}
