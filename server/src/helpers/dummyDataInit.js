if (typeof localStorage === "undefined" || localStorage == null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./storage");
}

const dummyData = {
  init: () => {
    let allBooks = [
      {
        title: "Julius Caesar",
        autor: "William Shakespeare",
        id: 1,
      },
      {
        title: "Othello",
        autor: "William Shakespeare",
        id: 2,
      },
      {
        title: "Macbeth",
        autor: "William Shakespeare",
        id: 3,
      },
      {
        title: "Hamlet",
        autor: "William Shakespeare",
        id: 4,
      },
      {
        title: "Romeo and Juliet",
        autor: "William Shakespeare",
        id: 5,
      },
      {
        title: "To Have and Have Not",
        autor: "Ernest Hemingway",
        id: 6,
      },
      {
        title: "For Whom the Bell Tolls",
        autor: "Ernest Hemingway",
        id: 7,
      },
      {
        title: "A Farewell to Arms",
        autor: "Ernest Hemingway",
        id: 8,
      },
      {
        title: "The Sun Also Rises",
        autor: "Ernest Hemingway",
        id: 9,
      },
      {
        title: "The Old Man and the Sea",
        autor: "Ernest Hemingway",
        id: 10,
      },
      {
        title: "The Big Four",
        autor: "Agatha Christie",
        id: 11,
      },
      {
        title: "The Man in the Brown Suit",
        autor: "Agatha Christie",
        id: 12,
      },
      {
        title: "The Murder on the Links",
        autor: "Agatha Christie",
        id: 13,
      },
      {
        title: `The Secret Adversary`,
        autor: "Agatha Christie",
        id: 14,
      },
      {
        title: `The Mysterious Affair at Styles`,
        autor: "Agatha Christie",
        id: 4,
      },
    ];

    let allAuthors = [
      {
        name: "Stan Lee",
        birthdate: "13-07-1990",
        id: 1,
        description:
          "Lorem ipsum dolor sit amet. Eum officia deserunt in corrupti sint hic nihil excepturi. Ea aperiam nihil est voluptatem quam sed internos magni ut possimus tempora ad distinctio enim. Ea atque quibusdam et minima porro quo commodi placeat.        ",
        books: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      },
      {
        name: `Ernest Hemingway`,
        birthdate: "30-12-1997",
        id: 2,
        description: `Qui repellendus molestiae et accusantium tenetur et dolores tempora hic aliquid rerum sit earum mollitia hic dolor autem eum quia quae. Aut voluptatem voluptatem ut placeat veritatis qui rerum illum sed commodi omnis aut beatae totam. Sit ipsum eveniet aut voluptatem adipisci ea dicta iste et voluptatem rerum ea sint repellendus ea numquam error sit nesciunt doloribus.        `,
        books: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
      },
      {
        name: `Agatha Christie`,
        birthdate: "12-10-1980",
        id: 3,
        description: `In sunt totam aut recusandae blanditiis sit recusandae voluptatem ut harum dolores in voluptatem commodi est perspiciatis accusantium. Id mollitia reprehenderit ut cumque pariatur vel temporibus sunt est voluptatem blanditiis.        `,
        books: [{ id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }],
      },
    ];

    localStorage.setItem("books", JSON.stringify(allBooks));
    localStorage.setItem("authors", JSON.stringify(allAuthors));
  },
};

module.exports = dummyData;
