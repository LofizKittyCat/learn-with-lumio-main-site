"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { CourseCard } from "./CourseCard";

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
      <div className="w-full min-h-screen bg-white dark:bg-[#080C16] justify-center items-center text-center">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-64 rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse"
          />
        ))}
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
      <div className="w-full min-h-screen bg-white dark:bg-[#080C16] items-center justify-center text-center">
        <p className="text-sm text-slate-500">No courses available yet.</p>
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
