import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const url = context.url;
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    return context.redirect(url.pathname.replace(/\/$/, "") + url.search, 301);
  }
  return next();
});