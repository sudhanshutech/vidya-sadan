import React from 'react'
import {
    Container,
    Section,
    SectionImage,
    SectionName,
    Name,
    Branch,
    Bio
  } from "./styles/teacher";

export default function Teacher({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
  }
  
Teacher.Section = function TeacherSection({ children, ...restProps }) {
    return <Section {...restProps}>{children}</Section>;
  };

Teacher.SectionImage = function TeacherSectionImage({ children, ...restProps }) {
    return <SectionImage {...restProps}>{children}</SectionImage>;
  };

Teacher.SectionName = function TeacherSectionName({ children, ...restProps }) {
    return <SectionName {...restProps}>{children}</SectionName>;
  };

Teacher.Name = function TeacherName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
  };

  Teacher.Branch = function TeacherBranch({ children, ...restProps }) {
    return <Branch {...restProps}>{children}</Branch>;
  };

  Teacher.Bio = function TeacherBio({ children, ...restProps }) {
    return <Bio {...restProps}>{children}</Bio>;
  };