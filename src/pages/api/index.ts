import api from "@/server/api";
import { withKoaApi } from "nextjs-koa-api";

api.router.get("/", (ctx) => {
	ctx.body = {
		method: "GET",
		route: "/",
	};
});

export default withKoaApi(api);

export const config = {
	api: {
		bodyParser: false,
	},
};
