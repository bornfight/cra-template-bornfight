/* eslint-disable import/no-extraneous-dependencies */
import { addDecorator, configure } from "@storybook/react";
import "@abraham/reflection";
import { RouterDecorator } from "../.storybook/decorators/RouterDecorator";

import moment from "moment";
import "moment/locale/hr";
import { Locale } from "enums/Locale";
import { AppConfigProviderDecorator } from "../.storybook/decorators/AppConfigProviderDecorator";
import { DiProviderDecorator } from "../.storybook/decorators/DiProviderDecorator";
moment.locale(Locale.Croatian);

import requireContext from "require-context.macro";

const req = requireContext("../src/stories", true, /.stories.tsx|mdx$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

import "../src/root/App.module.scss";

// Don't add global decorator for store because in certain stories store has default value!
// use stories/decorators/StoreProviderDecorator.tsx for decorating stories that need redux
addDecorator(RouterDecorator);
addDecorator(AppConfigProviderDecorator);
addDecorator(DiProviderDecorator);

// ⚠️ For some reason, rendering global AppRootDivDecorator.tsx does not render children inside it, but adjacent to it!
// Therefore, it's required to add the decorator manually in each story for the global styles ⚠️
