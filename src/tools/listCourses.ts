import { classroomService } from "../services/classroomService.js";

export async function listCourses() {
  const courses = await classroomService.listCourses();

  return {
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(courses, null, 2),
      },
    ],
  };
}