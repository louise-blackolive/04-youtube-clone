import express from "express";
import passport from "passport";
import routes from "../routes";
import { home, search } from "../controllers/videoControllers";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
  githubLogin,
  postGithubLogin,
  getMe,
  fbLogin,
  postFbLogin,
  ktLogin,
  postKtLogin
} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.logout, onlyPrivate, logout);

// Github
globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);

// Facebook
globalRouter.get(routes.facebook, fbLogin);
globalRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  postFbLogin
);

// Kakaotalk
globalRouter.get(routes.kakaotalk, ktLogin);
globalRouter.get(
  routes.kakaotalkCallback,
  passport.authenticate("kakao", {
    failureRedirect: "/login"
  }),
  postKtLogin
);

globalRouter.get(routes.me, getMe);

export default globalRouter;
