"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { CourseCard, CourseCardPlaceholder } from "./CourseCard";

export interface Course {
  id: number;
  title: string;
  description: string;
  lessons: number;
  icon: string;
}

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCourses() {
      const { data, error } = await supabase
        .from("Courses")
        .select("*")
        .eq("published", true)
        .order("id", { ascending: true });
      if (error) setError(error.message);
      else setCourses(data ?? []);

      setLoading(false);
    }

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="grid min-h-screen w-full place-items-center bg-white dark:bg-[#080C16] animate-pulse duration-350">
        <div className="flex flex-col w-full p-6 2xl:p-12 opacity-88 items-center">
          <div className="w-full max-w-7xl">
            <div className="w-full flex flex-row justify-center mb-12">
              <h1 className="font-space-grotesk font-medium text-4xl text-slate-700 dark:text-slate-300">
                Loading courses, please wait...
              </h1>
            </div>

            <div className="grid grid-cols-3 gap-6 2xl:gap-10">
              {[...Array(6)].map((_, i) => (
                <CourseCardPlaceholder key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen bg-white dark:bg-[#080C16] items-center justify-center text-center">
        <p className="text-sm text-red-500">Failed to load courses: {error}</p>
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="w-full min-h-screen flex flex-col bg-white dark:bg-[#080C16] items-center justify-center text-center">
        <p className="text-2xl text-slate-400 dark:text-white font-space-grotesk font-medium">
          No courses available yet. Try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#080C16]">
      <div className="w-full flex flex-col items-center gap-4">
        <div className="mt-12 text-center flex flex-col gap-8">
          <h1 className="font-space-grotesk font-medium text-4xl text-slate-700 dark:text-slate-300 mb-12">
            Here's what you can learn
          </h1>

          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              lessons={course.lessons}
              icon={course.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
