import React from "react";
import useSetTitle from "../../hooks/useSetTitle";

const Blog = () => {

  useSetTitle('Blog');

  return (
    <div className="my-28">
      <section className="bg-gray-100 text-gray-800 rounded-md">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            Blog
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300 mx-auto">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline font-bold">
                Difference between SQL and NoSQL?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-semibold">
                  -- Key Differences between SQL and NoSQL -- <br />
                  SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called
                  RDBMS or Relational Databases, whereas NoSQL is a
                  Non-relational or Distributed Database. Comparing SQL vs NoSQL
                  databases, SQL databases are table-based databases, whereas
                  NoSQL databases can be document-based, key-value pairs, and
                  graph databases. SQL databases are vertically scalable, while
                  NoSQL databases are horizontally scalable. SQL databases have
                  a predefined schema, whereas NoSQL databases use a dynamic
                  schema for unstructured data. Comparing NoSQL vs SQL
                  performance, SQL requires specialized DB hardware for better
                  performance while NoSQL uses commodity hardware.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline font-bold">
                What is JWT, and how does it work?
              </summary>
              <div className="px-4 pb-4 font-semibold">
                <p>
                  -- JWT -- <br />
                  JWT, also known as JSON Web Token, is an open standard for
                  sharing security information between two parties - a client
                  and a server. Each JWT contains encrypted JSON objects,
                  including a set of complaints. JWTs are signed using a
                  cryptographic algorithm to ensure that the claims cannot be
                  altered after the token is issued. <br />
                  -- How does it work -- <br />
                  JWT are distinguished from other Web tokens by the fact that
                  they contain a set of claims. Claims are used for the
                  transmission of information between two parties. These claims
                  are dependent upon the use case involved. For example, a claim
                  can indicate who issued the token, how long it is valid, or
                  which authorizations the customer has obtained.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline font-bold">
                What is the difference between javascript and NodeJS?
              </summary>
              <div className="px-4 pb-4 space-y-2 font-semibold">
                <p>
                  -- Key Differences Between JavaScript vs Node JS -- <br />
                  1. JavaScript is a simple programming language that runs in
                  any browser JavaScript Engine. Whereas Node JS is an
                  interpreter or running environment for a JavaScript
                  programming language that holds many excesses, it requires
                  libraries that can easily be accessed from JavaScript
                  programming for better use. <br />
                  2.JavaScript is normally used for any client-side activity for
                  one web application. An activity can be addressing business
                  validation or dynamic page display in some schedule time
                  interval or basic Ajax call kind of task. Those are used for a
                  maximum time for any web application. Whereas Node JS mainly
                  used for accessing or running any operating system for
                  non-blocking operation. An operation like creating or
                  executing a shell script, or getting some specific
                  hardware-related information on one call or installed
                  certificate details in the system or a lot of define task is
                  non-blocking on an operating system. <br />
                  3. JavaScript running in any engine like Spider monkey
                  (FireFox), JavaScript Core (Safari), V8 (Google Chrome). So
                  JavaScript programming is very easy to write, and put any
                  running environment means proper browser. Whereas Node JS only
                  support the V8 engine, which googles chrome specific. But
                  whether it supports the V8 engine, written JavaScript code can
                  able to run in any environment. So there has no
                  browser-specific constraint on it. <br />
                  4. JavaScript is normally following Java Programming language
                  standard. There may have some different way of writing code,
                  but at the same time, we can say it following the Java
                  Programming language standard. Whereas node JS is written in
                  C++ and provides a V8 engine base browser javascript running
                  engine, it helps us run a written javascript program in any
                  browser environment. <br />
                  5. For accessing any operating system, specific non-blocking
                  task JavaScript has some specific object, but all of them are
                  operating system specific. An example is ActiveX Control which
                  is only running in Windows. But Node JS is given utility to
                  run some operating system specific non-blocking tasks from any
                  JavaScript programming. It doesn’t have any operating system
                  specific constant. Node JS is very much familiar to create a
                  specific binding with the file system and allows the developer
                  to read or sometimes write on disk.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline font-bold">
                How does NodeJS handle multiple requests at the same time?
              </summary>
              <div className="px-4 pb-4 space-y-2 font-semibold">
                <p>
                  NodeJS receives multiple enquiries from clients and places
                  them in EventQueue. NodeJS is built with an event-based
                  architectural concept. NodeJS has its own EventLoop which is
                  an infinite loop that receives queries and handles them.{" "}
                  <br />
                  node. js can handle up to 1000 queries per second and the
                  speed limit is only as fast as your network card. Note that
                  this is 1000 queries per second and not simultaneous connected
                  clients. It can manage the 10,000 concurrent clients without
                  problem.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
