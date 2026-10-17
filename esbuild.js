const esbuild = require("esbuild");
const isWatch = process.argv.includes("--watch");

const logStyles = {
    info: "color: #00f2fe; background: #0f172a; padding: 2px 6px; border-radius: 4px; font-weight: bold;",
    success: "color: #10b981; background: #064e3b; padding: 2px 6px; border-radius: 4px; font-weight: bold;",
    error: "color: #ef4444; background: #7f1d1d; padding: 2px 6px; border-radius: 4px; font-weight: bold;"
};

async function build() {
    const ctx = await esbuild.context({
        entryPoints: ["src/content.ts"],
        bundle: true,
        outfile: "out/content.js",
        target: ["chrome100"],
        platform: "browser",
        sourcemap: isWatch ? "inline" : false,
        minify: !isWatch,
    });


    if (isWatch) {
        await ctx.watch();
        console.log("%c esbuild is listening... %c", logStyles.info, "color: inherit");
    } else {
        await ctx.rebuild();
        await ctx.dispose();
        console.log("%c build completed successfully %c", logStyles.success, "color: inherit");
    }
}

build().catch((error) => {
    console.error(`[ERROR] %c ${error} %c`, logStyles.error, "color: inherit");
    process.exit(1);
});