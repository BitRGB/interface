export function dateUtcFormat(fmt: string, date: Date | string) {
    if (typeof date == "string") {
        date = new Date(date)
    }
    let ret;
    const opt: any = {
        "Y+": date.getUTCFullYear().toString(),
        "m+": (date.getUTCMonth() + 1).toString(),
        "d+": date.getUTCDate().toString(),
        "H+": date.getUTCHours().toString(),
        "M+": date.getUTCMinutes().toString(),
        "S+": date.getUTCSeconds().toString()
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}