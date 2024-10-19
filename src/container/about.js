import React from "react";
import About from "../component/about";
import TeacherContainer from "./teacher";

export default function AboutContainer() {
  return (
    <>
      <About>
        <About.Div>
          <About.FrameOne>
            <About.Heading>Our mission</About.Heading>
            <About.Text>
              We are on a mission to provide a premier educational experience
              customized to the needs of each student.
            </About.Text>
          </About.FrameOne>

          <About.FrameTwo>
            <About.MessageContainer>
              <About.Message>
                What distinguishes a great school from a good school? I believe
                that clarity of purpose, exceptional teachers, and demonstrated
                outcomes are hallmarks of great schools. A great school is a
                place with a deep commitment to student learning, where faculty
                nourish the intellectual, moral, emotional, and social growth of
                every student. It is a place where students, teachers, and
                parents embark together on an academic journey with clear and
                well-defined objectives. It is filled with the joy of discovery
                and the excitement of personal challenge and growth. It is a
                community dedicated to developing strength of character and
                excellence in all dimensions of its students' lives. And it is a
                place that has a distinctive and lasting impact.
                <br />
                <br />
                The Vidya Sadan School strives to be a great school. Our
                mission, simply put, is to prepare students for lives of
                purpose, achievement, and generosity of spirit. Our school set
                out with this mission in 2007, and it continues to guide
                everything that we do.
                <br />
                <br />
                Our talented faculty are experts
                in their disciplines with a deep commitment to student success
                they truly get to know each child, providing the challenge,
                support, and encouragement that fosters learning and personal
                growth. Our rigorous program of inquiry and study empowers
                students to exercise their intellectual curiosity, expand their
                understanding, and develop critical skills for future success.
                And our emphasis on character and values challenges each student
                to be a person of integrity, a contributing member of our school
                community, and a thoughtful and involved citizen of the world.
                <br />
                <br />
                I encourage you to explore our website to learn more about all
                that The Vidya Sadan School has to offer. I also invite you to visit
                us in person, please contact our Admission Office to schedule
                your campus tour. We hope to see you soon!
                <br />
                <br />
                All my best,
                <br />
                <br />
                <img src="images/pictures/Praveen.png" alt="" />
                <br />
                Praveen Dubey
                <br />
                Head of School
              </About.Message>
            </About.MessageContainer>

            <About.Poster>
              <About.Image
                src="images/pictures/vidyaprinciple.jpeg"
                alt=""
              ></About.Image>
              <About.Head>Head Master</About.Head>
              <About.Tag>
                <hr />
              </About.Tag>
              <About.Quote>
                Praveen Dubey has been a teacher, coach, and leader of Vidya
                sadan school for more than 10 years. He is teacher of
                Mathematics and physics
              </About.Quote>
            </About.Poster>
          </About.FrameTwo>

          <About.FrameThree>
            <About.Heading>Expert Teachers</About.Heading>
            <About.Text>Meet with our Teachers</About.Text>
            <About.CardSection>
              <TeacherContainer
                image="images/pictures/teachers/praveen-dubey.jpeg"
                name="Praveen Dubey"
                subject="Mathematics"
                description="Praveen Dubey has been a teacher, coach, and leader of Vidya sadan school since starting of school. He is teacher of Mathematics and physics."
              />
              <TeacherContainer
                image="images/pictures/teachers/sushma-dubey.jpeg"
                name="Sushma Dubey"
                subject="Managing Director"
                description="Sushma Dubey has been managing director of Vidya sadan school since starting of school."
              />
              <TeacherContainer
                image="images/pictures/teachers/mahendra-pandey.jpeg"
                name="Mahendra Pandey"
                subject="Hindi & Sanskrit"
                description="Mahendra Pandey has been a teacher in Vidya sadan school for more than 2 years. He is teacher of Hindi and Sanskrit."
              />
              <TeacherContainer
                image="images/pictures/teachers/radha-sharma.jpeg"
                name="Radha Sharma"
                subject="Science"
                description="Radha Sharma has been a teacher in Vidya sadan school for more than 1 years. He is teacher of Science."
              />
              <TeacherContainer
                image="images/pictures/teachers/ranjana-shakya.jpeg"
                name="Ranjana Shakya"
                subject="Math & English"
                description="Ranjana Shakya has been a teacher in Vidya sadan school for more than 2 years. He is teacher of Math & English."
              />
              <TeacherContainer
                image="images/pictures/teachers/manisha-kushwaha.jpeg"
                name="Manisha Kushwaha"
                subject="Pre-Primary"
                description="Manisha Kushwaha has been a teacher in Vidya sadan school for more than 3 years. He is teacher of Pre-Primary."
              />
              <TeacherContainer
                image="images/pictures/teachers/vinita-chandel.jpeg"
                name="Vinita Chandel"
                subject="Primary"
                description="Vinita Chandel has been a teacher in Vidya sadan school for more than 2 years. He is teacher of Primary."
              />

            </About.CardSection>
          </About.FrameThree>
        </About.Div>
      </About>
    </>
  );
}
