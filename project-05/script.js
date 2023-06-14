class Course {
  constructor(title, description, price) {
    this.title = title;
    this.description = description;
    this.price = price;
  }

  display() {
    console.log(`Title: ${this.title}`);
    console.log(`Description: ${this.description}`);
    console.log(`Price: ${this.price}`);
  }
}

class CourseFactory {
  createCourse(title, description, price) {
    return new Course(title, description, price);
  }
}

const courseFactory = new CourseFactory();
const javascriptCourse = courseFactory.createCourse(
  "JavaScript Basics",
  "Learn the basics of JavaScript programming language.",
  49
);
const reactCourse = courseFactory.createCourse(
  "React Fundamentals",
  "Master the fundamentals of React framework.",
  99
);
const nodejsCourse = courseFactory.createCourse(
  "Node.js in Practice",
  "Learn to build scalable and efficient web applications with Node.js.",
  79
);

javascriptCourse.display();
reactCourse.display();
nodejsCourse.display();
