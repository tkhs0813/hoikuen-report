import { rest } from "msw";

export const handlers = [
  rest.get("/reports", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          year: 2023,
          month: 2,
          reports: [
            {
              id: "1111",
              type: "レポート1",
              photoURL: "https://picsum.photos/seed/picsum/536/354",
            },
            {
              id: "2222",
              type: "レポート2",
              photoURL: "https://picsum.photos/seed/picsum/536/354",
            },
          ],
        },
        {
          year: 2023,
          month: 3,
          reports: [
            {
              id: "1111",
              type: "レポート1",
              photoURL: "https://picsum.photos/seed/picsum/536/354",
            },
            {
              id: "2222",
              type: "レポート2",
              photoURL: "https://picsum.photos/seed/picsum/536/354",
            },
          ],
        },
        {
          year: 2023,
          month: 4,
          reports: [
            {
              id: "1111",
              type: "レポート1",
              photoURL: "https://picsum.photos/seed/picsum/536/354",
            },
            {
              id: "2222",
              type: "レポート2",
              photoURL: "https://picsum.photos/seed/picsum/536/354",
            },
          ],
        },
        {
          year: 2023,
          month: 5,
          reports: [
            {
              id: "1111",
              type: "レポート1",
              photoURL: "https://picsum.photos/seed/picsum/536/354",
            },
            {
              id: "2222",
              type: "レポート2",
              photoURL: "https://picsum.photos/seed/picsum/536/354",
            },
          ],
        },
      ])
    );
  }),
];
