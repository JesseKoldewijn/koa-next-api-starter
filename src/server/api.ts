import { Koa, KoaApi, Router, withKoaApi } from "nextjs-koa-api";

export interface ApiState extends Koa.DefaultState {
	seesion: boolean;
}

export interface ApiContext extends Koa.Context {
	user: { name: string };
}

const api = new KoaApi<ApiState, ApiContext>({
	attachBody: true,
	router: {
		prefix: "/api",
	},
});

api.use(async (ctx, next) => {
	// ctx.user.name
	// ctx.state.seesion
	try {
		await next();
	} catch (err: any) {
		//catch all errors
		err as Error;
		ctx.status = err.statusCode || err.status || 500;
		ctx.body = {
			message: err.message,
		};
	}
});

export default api;
