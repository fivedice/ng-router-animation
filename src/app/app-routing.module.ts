import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'one',
				component: OneComponent,
				data: { animationState: 'One' }
			},
			{
				path: 'two',
				component: TwoComponent,
				data: { animationState: 'Two' }
			},
			{
				path: 'three',
				component: ThreeComponent,
				data: { animationState: 'Three' }
			},
			{
				path: '**',
				redirectTo: 'one'
			}
		]
	},
	{
		path: '**',
		redirectTo: 'one'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
