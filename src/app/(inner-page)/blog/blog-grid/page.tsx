"use client";
import NewsLetter from "@/components/pages/about-us/NewsLetter";
import BlogGridAllCards from "@/components/pages/blog-grid/BlogGridAllCards";
import CourseOneBannerWithLabel from "@/components/pages/course-one/CourseOneBannerWithLabel";
import { useEffect, useState } from "react";
import { aboutCoursesData } from "../../../../../public/data/aboutCoursesData";

const BlogGrid = () => {
  const [courseList, setCourseList] = useState(aboutCoursesData);
  const [buttonData, setButtonData] = useState<string[]>([]);

  useEffect(() => {
    const uniqueTags = new Set<string>();

    aboutCoursesData.forEach((data) => {
      data.tags.forEach((tag) => {
        uniqueTags.add(tag.label);
      });
    });

    setButtonData(Array.from(uniqueTags));
  }, []);

  const handleTabClick = (tag: string) => {
    const filteredCourses = aboutCoursesData.filter((course) => {
      return course.tags.some((courseTag) => courseTag.label === tag);
    });

    setCourseList(filteredCourses);
  };
  return (
    <>
      <CourseOneBannerWithLabel
        title="Our Latest News and up coming blog"
        buttonText={buttonData}
        handleTabClick={handleTabClick}
      />
      <BlogGridAllCards />

      <div className="section-gap-top">
        <NewsLetter />
      </div>
    </>
  );
};

export default BlogGrid;
