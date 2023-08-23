import { v4 } from "uuid";

const notes = [
  {
    title: "Note 1 title",
    content: "Note 1 content",
    tags: [{ tag: "learnings", id: v4() }],
    color: "#D4E2D4",
    priority: "high",
    isPinned: true,
    isRead: true,
    date: "08/23/23 16.32 PM",
    createdTime: new Date("Tue Aug 22 2023 16:32:22").getTime(),
    editedTime: null,
    id: v4(),
  },
  {
    title: "Note 2 title",
    content: "Note 2 content",
    tags: [{ tag: "work", id: v4() }],
    color: "#FFF5EB",
    priority: "high",
    isPinned: true,
    isRead: true,
    date: "08/23/23 16.32 PM",
    createdTime: new Date("Wed Aug 23 2023 11:12:56").getTime(),
    editedTime: null,
    id: v4(),
  },
];

export default notes;
