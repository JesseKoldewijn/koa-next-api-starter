import Koa, { Context, Next } from "koa";

import Router from "@koa/router";
import Boom from "@hapi/boom";

import { dependencies, devDependencies } from "../package.json";

const App = new Koa();
const AppRouter = new Router();

const getWelcome = async (ctx: Context, next: Next) => {
	try {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/todos",
			{
				method: "GET",
				headers: {},
			}
		);

		if (response.ok) {
			const result = await response.json();

			ctx.body = JSON.stringify({
				env: {
					deps: dependencies,
					devDeps: devDependencies,
				},
				res: {
					success: true,
					data: result,
				},
			});
		} else {
			ctx.body = JSON.stringify({
				env: {
					deps: dependencies,
					devDeps: devDependencies,
				},
				res: {
					success: false,
					data: null,
				},
			});
		}
	} catch (e) {
		ctx.body = JSON.stringify({
			env: {
				deps: dependencies,
				devDeps: devDependencies,
			},
			res: {
				success: false,
				exception: e,
				data: null,
			},
		});
	}
};

AppRouter.get("/", getWelcome);

App.use(AppRouter.routes());
App.use(
	AppRouter.allowedMethods({
		throw: true,
		notImplemented: () => Boom.notImplemented(),
		methodNotAllowed: () => Boom.methodNotAllowed(),
	})
);

if (import.meta.env.PROD) {
	App.listen(8001);
}

export const Main = App;
