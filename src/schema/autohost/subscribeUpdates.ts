import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { unixTime } from "@/schema/definitions/unixTime";

export default defineEndpoint({
    source: "server",
    target: "autohost",
    description:
        "Ask the autohost to send us updates about its battles. Autohost will send all updates with time > since (not >= but >)",
    request: {
        data: Type.Object({
            since: Type.Ref(unixTime),
        }),
    },
    response: [
        {
            status: "success",
        },
    ],
});
