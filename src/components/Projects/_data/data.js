export const projects = [
  {
    id: 1,
    title: "cookiJar",
    subtitle: "React | Bootstrap/Reactstrap | JavaScript | JSON Server | REST API | CSS | HTML",
    description:
      "A point-based productivity tracking application with user-defined rewards built with React & JSON server. Created for my client-side capstone at Nashville Software School, this application allows users to gamify their tasks or 'to-do' lists by creating a point system that rewards them with each task completion.",
    problem: "The application must have a login and registration page, and the user must be able to create, read, update, and delete tasks and resources. It should allow for registration and login. Upon user authentication, the application will present account-specific resources. Full CRUD functionality includes the use of a form to enable users to create and update resources, the ability to read JSON-queried resources from the API, utilize an input selector querying options database (radio, drop-down, check-box), and delete resources from the API. The application must be responsive to various media displays.",
    solution: "With the increase in remote work, the demand for productivity tools has risen. This application allows users to define their own rewards and point system for completing tasks. When the user creates a new task, they are prompted to select a set amount of points to be rewarded once that task is marked as complete. The user can then view their tasks and mark them as complete, which will add the points to their total. Once the user has accumulated enough points, they can redeem them for a reward of their choosing. The user can also edit and delete tasks and rewards, as well as add new rewards. The application is responsive to various media displays through the use of Bootstrap and flexboxes. It is also responsive to user input, with error messages displayed when the user attempts to submit an empty form or delete a task or reward that has already been redeemed. All resources created by the user are stored in a JSON server and are specific to that user. This application was built with React, JavaScript, CSS, HTML, JSON server, and Bootstrap. As the first application I built with React, I learned a lot about the React framework and how to use it to build a responsive, dynamic application. I also learned how to use JSON server to create a REST API and how to use fetch calls to query the API.",
    image: "https://onedrive.live.com/embed?resid=DEB0002FC4BFD90D%2143208&authkey=%21AC7xZNLuc_XzzhY",
    repolink: "https://github.com/kawtarzz/cooki-jar",
    demo: "https://cooki-ozv0b7m70-kawtarzz.vercel.app/"
  },
  {
    id: 2,
    title: "ShoptheBlock",
    subtitle: "React | Firebase | JavaScript | Bootstrap/Reactstrap | C# | .NET Core | SQL Server | CSS | HTML",
    description:
      "Full-stack E-Commerce Site with user account privileges. Upon registration, users can shop by category or search for items, add items to their cart and continue browsing or checkout & receive an order confirmation.",
    problem: "To build a full-stack application with user authentication, full CRUD functionality, utilizing an SQL database. The application must have a login and registration page, and the user must be able to create, read, update, and delete resources. Full CRUD functionality includes the use of a form to allow users to create and update resources, the ability to read queried resources from the database, utilize an input selector querying options database (radio, drop-down, check-box), and delete resources from the database. The application must be responsive to various media displays and employ the Single Responsibility principle with a focus on modular code.",
    solution: "Shop the block is a full-stack E-Commerce site built for my final capstone project at Nashville Software School. When designing the application, I created user stories to describe the core functionality of the app with corresponding wireframes. Using DBdiagram, I designed an ERD to display the application’s data structure with multiple one-to-many and many-to-many relationships. The application has full CRUD functionality, allowing the users to add items to their shopping cart, view products, update and delete items from their cart. Upon checkout, the user is presented with their order summary, and once confirming the order, a payment form is required for order placement. I also utilized Firebase for user authentication and authorization. This application was built with React, JavaScript, CSS, HTML, C#, .NET Core, SQL Server, and Bootstrap. I learned a lot about the React framework and how to use it to build a responsive, dynamic application. I also learned how to use Firebase for user authentication and authorization, as well as how to use ADO.NET to build a web API and SQL Server to create a database.",
    image: "https://onedrive.live.com/embed?resid=DEB0002FC4BFD90D%2143209&authkey=%21AD3GNB7Cu18OdG4",
    repolink: "https://github.com/kawtarzz/shoptheblock-ecomm-fullstack",
    demo: "https://locus-app-f0eb9.web.app/"
  }
];
