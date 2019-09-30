# `now dev` bug reproduction

Async tasks work in `now dev` but break in production.

## Test locally
Run `now dev`, then open [`http://localhost:3000/api/test`](http://localhost:3000/api/test). You'll see an `OK` on the page, and the `now dev` process should log:
```
Beginning asyncTask...
asyncTask complete
```

## Test production
Run `now`, then open the resulting `/api/test` route. You'll see the `OK`, but the logs will indicate that the task never completed:
```
START RequestId: [id] Version: $LATEST
2019-09-30T16:45:48.655Z	[id]	INFO	Beginning asyncTask...
END RequestId: [id]
REPORT RequestId: [id]	Duration: 49.42 ms	Billed Duration: 100 ms	Memory Size: 3008 MB	Max Memory Used: 85 MB	Init Duration: 180.44 ms
```
