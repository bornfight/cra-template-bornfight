import { DependencyInjectionProvider } from "providers/DependencyInjectionProvider/DependencyInjectionProvider";
import * as React from "react";

// tslint:disable-next-line:no-any
export const DiProviderDecorator = (storyFn: any) => {
    return (
        <DependencyInjectionProvider>{storyFn()}</DependencyInjectionProvider>
    );
};
