export { default } from "next-auth/middleware";

export const config = { matcher: ["/addtopic","/editTopic/:id"] };