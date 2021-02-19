export namespace DemoModule {
    type State = {
        user: User | undefined;
    }

    interface User{
        id: number | string;
        name: string;
    }
}
