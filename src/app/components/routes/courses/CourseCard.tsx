import { BookOpenText } from "lucide-react";
import Image from "next/image";

interface CourseInfo {
  title: string;
  description: string;
  lessons: number;
  icon: string;
}

export function CourseCard({ title, description, lessons, icon }: CourseInfo) {
  return (
    <div className="group flex flex-col bg-white dark:bg-[#080C16] border border-slate-200 dark:border-white/8 rounded-xl overflow-hidden hover:border-slate-300 dark:hover:border-white/20 transition-colors shadow-2xl">
      {/* Banner
            <div className={`${config.banner} flex items-center justify-center py-6`}>
                <i className={`ti ${config.icon} ${config.text} text-4xl`} aria-hidden="true" />
            </div>*/}

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <p className="flex items-center gap-4 text-xl font-space-grotesk font-medium text-slate-800 dark:text-white mb-2">
          <Image src={icon} alt="course_image" className="h-16"></Image>
          {title}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 dark:border-white/8">
          <span className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <BookOpenText size={16} />
            {lessons} lessons
          </span>
        </div>
      </div>
    </div>
  );
}
