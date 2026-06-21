import { BookOpenText } from "lucide-react";
import Image from "next/image";

interface CourseInfo {
  title: string;
  description: string;
  lessons: number;
  icon: string;
}

function CourseCardPlaceholder() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full rounded-3xl shadow-sm overflow-hidden flex flex-col shadow-lg border border-slate-300 dark:border-white/8">
        {/* Top Graphic Section */}
        <div className="h-[220px] relative bg-[#e5e5e5] flex items-end">
          {/* Badge Placeholder */}
          <div className="absolute top-5 left-5 w-[72px] h-6 bg-white rounded-lg opacity-90"></div>

          {/* Stylized House Vector */}
          <div className="w-full absolute bottom-0 left-0">
            <svg
              viewBox="0 0 400 200"
              className="w-full h-auto block"
              preserveAspectRatio="xMidYMax slice"
            >
              {/* Ground */}
              <rect x="0" y="160" width="100%" height="40" fill="#d4d4d4" />
              {/* Background Roof Depth */}
              <polygon points="180,80 320,110 180,110" fill="#d4d4d4" />
              {/* Main House (Left) */}
              <rect x="85" y="50" width="15" height="30" fill="#ffffff" />{" "}
              {/* Chimney */}
              <polygon
                points="50,160 50,90 100,50 180,100 180,160"
                fill="#ffffff"
              />{" "}
              {/* Body & Roof */}
              {/* Windows */}
              <rect x="70" y="100" width="25" height="15" fill="#e5e5e5" />
              <rect x="70" y="125" width="25" height="15" fill="#e5e5e5" />
              {/* Middle Extension */}
              <rect x="180" y="100" width="100" height="60" fill="#f5f5f5" />
              {/* Top Windows */}
              <rect x="195" y="110" width="20" height="15" fill="#ffffff" />
              <rect x="245" y="110" width="20" height="15" fill="#ffffff" />
              {/* Arched Doors */}
              <path d="M195 160 v-15 a 10 10 0 0 1 20 0 v15 Z" fill="#ffffff" />
              <path d="M245 160 v-15 a 10 10 0 0 1 20 0 v15 Z" fill="#ffffff" />
              {/* Garage (Right) */}
              <polygon points="260,120 310,90 360,120" fill="#f5f5f5" />{" "}
              {/* Roof */}
              <rect
                x="275"
                y="120"
                width="70"
                height="40"
                fill="#ffffff"
              />{" "}
              {/* Body */}
              <rect
                x="290"
                y="130"
                width="40"
                height="30"
                fill="#e5e5e5"
              />{" "}
              {/* Door */}
            </svg>
          </div>
        </div>

        {/* Bottom Text Section */}
        <div className="p-7 bg-white dark:bg-[#080C16] flex flex-col">
          {/* Title Placeholder */}
          <div className="w-[50%] h-[22px] bg-[#d1d5db] dark:bg-white/8 rounded-full mb-6"></div>

          {/* Content Lines Placeholders */}
          <div className="flex flex-col gap-[14px]">
            <div className="w-full h-[14px] bg-[#f3f4f6] dark:bg-white/8 rounded-full"></div>
            <div className="w-[95%] h-[14px] bg-[#f3f4f6] dark:bg-white/8 rounded-full"></div>
            <div className="w-[65%] h-[14px] bg-[#f3f4f6] dark:bg-white/8 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CourseCard({ title, description, lessons, icon }: CourseInfo) {
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

export { CourseCard, CourseCardPlaceholder };
