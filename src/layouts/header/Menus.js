import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/newcustomer">نسجيل عميلة جديدة</Link>
    </li>
    <li>
      <Link href="/customers">قائمة العميلات</Link>
    </li>
  </Fragment>
);
export const Pages = () => (
  <Fragment>
    {/* <li>
      <Link href="/calendar">Academic Calendar</Link>
    </li>
    <li>
      <Link href="/testimonials">testimonials</Link>
    </li>
    <li>
      <Link href="/login">login</Link>
    </li>
    <li>
      <Link href="/gallery">gallery</Link>
    </li>
    <li>
      <Link href="/pricing">pricing</Link>
    </li>
    <li>
      <Link href="/faq">Faq</Link>
    </li> */}
  </Fragment>
);
export const Teacher = () => (
  <Fragment>
    {/* <li>
      <Link href="/teacher">Teacher</Link>
    </li>
    <li>
      <Link href="/teacher-details">Teachers Details</Link>
    </li> */}
  </Fragment>
);
export const Customers = () => (
  <Fragment>
    {/* <li>
      <Link href="/custmers">Customers</Link>
    </li>
    <li>
      <Link href="/classe-details">Classes Details</Link>
    </li> */}
  </Fragment>
);
export const Event = () => (
  <Fragment>
    {/* <li>
      <Link href="/events">Event</Link>
    </li>
    <li>
      <Link href="/event2">Event 2</Link>
    </li>
    <li>
      <Link href="/event-details">Events Details</Link>
    </li> */}
  </Fragment>
);
export const Program = () => (
  <Fragment>
    {/* <li>
      <Link href="/program">Program</Link>
    </li>
    <li>
      <Link href="/program-details">program details</Link>
    </li> */}
  </Fragment>
);
export const Blog = () => (
  <Fragment>
    {/* <li>
      <Link href="/blog-grid">blog grid</Link>
    </li>
    <li>
      <Link href="/blog-list">blog list</Link>
    </li>
    <li>
      <Link href="/blog-single">blog single</Link>
    </li> */}
  </Fragment>
);
export const NewCustomer = () => (
  <Fragment>
    {/* <li>
      <Link href="/newcustomer">NewCustomer</Link>
    </li>
    <li>
      <Link href="/shop-details">Shop Details</Link>
    </li> */}
  </Fragment>
);
export const About = () => <Link href="/about">About</Link>;
export const Contact = () => <Link href="/contact">CONTACTS</Link>;
