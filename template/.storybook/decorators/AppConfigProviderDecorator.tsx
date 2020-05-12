import { AppConfigProvider } from "providers/AppConfigProvider";
import * as React from "react";

// tslint:disable-next-line:no-any
export const AppConfigProviderDecorator = (storyFn: any) => {
    return <AppConfigProvider>{storyFn()}</AppConfigProvider>;
};
