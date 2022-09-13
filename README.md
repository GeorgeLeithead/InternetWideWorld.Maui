# InternetWideWorld.com - Blazor

This repository is a POC for .NET MAUI Blazor Hybrid. It contains three different projects, client, web and shared.  See [Build a .NET MAUI Blazor app](https://docs.microsoft.com/en-us/aspnet/core/blazor/hybrid/tutorials/maui?view=aspnetcore-6.0) for guidance.

In a Blazor Hybrid app, Razor components run natively on the device. Components render to an embedded Web View control through a local inter-op channel. Components don't run in the browser, and WebAssembly isn't involved. Razor components load and execute code quickly, and components have full access to the native capabilities of the device through the .NET platform.

## Client
A .NET MAUI implementation for Android, iOS, Windows, Mac Catalyst and Tizen native client applications.

## Web
The [Blazor WebAssembly](https://docs.microsoft.com/aspnet/core/blazor/?view=aspnetcore-3.1#blazor-webassembly) client web application.

## Shared
A C# class library with a shared Razor layout, pages and components as well as client JavaScript (JS), Cascading Style-Sheets (CSS) and image assets.

### Deploy to Azure Static Web Apps

This applications web can be deployed to [Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps), to learn how, check out [our quick-start guide](https://aka.ms/blazor-swa/quickstart).