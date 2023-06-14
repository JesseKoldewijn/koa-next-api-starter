import koaBody from "koa-body";
import api, { ApiContext, ApiState } from "@/server/api";
import { Router, withKoaApi } from "nextjs-koa-api";

api.router
	.post("/hello", koaBody(), (ctx) => {
		ctx.body = ctx.request.body;
	})
	.get("/throw", koaBody(), (ctx) => {
		ctx.body = {
			msg: "Stop throwing!",
		};
	});

// create nested router
const subRouter = new Router<ApiState, ApiContext>().get("/", (ctx) => {
	ctx.body = {
		msg: `nested params: ${JSON.stringify(ctx.params)}`,
	};
});

//mount nested router
//https://github.com/koajs/router/blob/master/API.md#nested-routers
api.router.use("/nested/:data", subRouter.routes(), subRouter.allowedMethods());

export default withKoaApi(api);

export const config = {
	api: {
		bodyParser: false,
	},
};
