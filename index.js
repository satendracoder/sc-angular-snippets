#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const type = args[0];  // ng-svc, ng-cmp, ng-pipe...
const name = args[1];

if (!type || !name) {
  console.log("Usage: ngg <type> <Name>");
  process.exit(1);
}

const templates = {
  "ng-cmp": `import { Component } from '@angular/core';

@Component({
  selector: 'app-${name.toLowerCase()}',
  templateUrl: './${name.toLowerCase()}.component.html',
  styleUrls: ['./${name.toLowerCase()}.component.scss']
})
export class ${capitalize(name)}Component {
  constructor() {}
}
`,
  "ng-cmp-inline": `import { Component } from '@angular/core';

@Component({
  selector: 'app-${name.toLowerCase()}',
  template: '<p>${name.toLowerCase()} works!</p>',
  styles: ['p { color: blue; }']
})
export class ${capitalize(name)}Component {
  constructor() {}
}
`,
  "ng-svc": `import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ${capitalize(name)}Service {
  constructor(private http: HttpClient) {}
}
`,
  "ng-pipe": `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: '${name.toLowerCase()}' })
export class ${capitalize(name)}Pipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return value;
  }
}
`,
  "ng-int": `import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ${capitalize(name)}Interceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloned = req.clone();
    return next.handle(cloned);
  }
}
`,
  "ng-int-auth": `import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ${capitalize(name)}AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const cloned = req.clone({
      setHeaders: { Authorization: token ? \`Bearer \${token}\` : '' }
    });
    return next.handle(cloned);
  }
}
`,
  "ng-dir": `import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: '[${name.toLowerCase()}]' })
export class ${capitalize(name)}Directive {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
`,
  "ng-guard": `import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ${capitalize(name)}Guard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }
}
`,
  "ng-mod": `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class ${capitalize(name)}Module {}
`,
  "ng-resolver": `import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ${capitalize(name)}Resolver implements Resolve<any> {
  resolve(): Observable<any> {
    return of(null);
  }
}
`
};

if (!templates[type]) {
  console.error("Invalid type. Supported types:", Object.keys(templates).join(", "));
  process.exit(1);
}

const fileName = getFileName(type, name);
fs.writeFileSync(path.join(process.cwd(), fileName), templates[type]);
console.log(`${fileName} created successfully!`);

// Helper functions
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getFileName(type, name) {
  const lower = name.toLowerCase();
  switch(type) {
    case "ng-cmp": return `${lower}.component.ts`;
    case "ng-cmp-inline": return `${lower}.component.ts`;
    case "ng-svc": return `${lower}.service.ts`;
    case "ng-pipe": return `${lower}.pipe.ts`;
    case "ng-int": return `${lower}.interceptor.ts`;
    case "ng-int-auth": return `${lower}.interceptor.ts`;
    case "ng-dir": return `${lower}.directive.ts`;
    case "ng-guard": return `${lower}.guard.ts`;
    case "ng-mod": return `${lower}.module.ts`;
    case "ng-resolver": return `${lower}.resolver.ts`;
    default: return `${lower}.ts`;
  }
}
