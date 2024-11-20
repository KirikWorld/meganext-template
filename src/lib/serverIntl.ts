import path from "path";
import fs from "fs";
import { NextApiRequest } from "next";
import { createTranslator } from "next-intl";
import { getServerSideCookie } from "./getCookie";

export function serverIntl(req: NextApiRequest, namespace: string) {
    const cookie = req.headers.cookie || '';
    const locale = getServerSideCookie("NEXT_LOCALE", cookie) || 'en';
    const msgs = JSON.parse(fs.readFileSync(path.join(process.cwd(), `src/translations/${locale}.json`), "utf-8"))
    const translator = createTranslator({ locale, messages: msgs, namespace });

    return {
        t: translator
    };
}