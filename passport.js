import passport from "passport";
import GithubStrategy from "passport-github";
import FaceboockStrategy from "passport-facebook";
import KakaotalkStrategy from "passport-kakao";
import routes from "./routes";
import User from "./models/User";
import {
  githubLoginCallback,
  fbLoginCallback,
  ktLoginCallback
} from "./controllers/userController";

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`
    },
    githubLoginCallback
  )
);

passport.use(
  new FaceboockStrategy(
    {
      clientID: process.env.FB_ID,
      clientSecret: process.env.FB_SECRET,
      callbackURL: `https://bad-kangaroo-91.localtunnel.me${routes.facebookCallback}`
    },
    fbLoginCallback
  )
);

passport.use(
  new KakaotalkStrategy(
    {
      clientID: process.env.KT_ID,
      clientSecret: process.env.KT_SECRET,
      callbackURL: `http://localhost:4000${routes.kakaotalkCallback}`,
      scope: ["account_email"]
    },
    ktLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
