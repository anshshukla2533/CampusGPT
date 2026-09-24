export interface Course {
  id: string;
  name: string;
  section: string;
  teacher: string;
}

export class ClassroomService {
  private courses: Course[] = [
    {
      id: "course-1",
      name: "Operating Systems",
      section: "CSE-A",
      teacher: "Dr. Sharma",
    },
    {
      id: "course-2",
      name: "Database Management Systems",
      section: "CSE-A",
      teacher: "Dr. Gupta",
    },
    {
      id: "course-3",
      name: "Computer Networks",
      section: "CSE-A",
      teacher: "Dr. Singh",
    },
    {
      id: "course-4",
      name: "Machine Learning",
      section: "CSE-A",
      teacher: "Dr. Patel",
    },
  ];

  async listCourses(): Promise<Course[]> {
    return this.courses;
  }

  async getCourse(id: string): Promise<Course | undefined> {
    return this.courses.find((course) => course.id === id);
  }
}

export const classroomService = new ClassroomService();
