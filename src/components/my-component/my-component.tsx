import { Component, Prop, h, Host, State } from '@stencil/core';
import { httpWrapper, getFilteredProjects } from '../../utils/utils';

@Component({
  tag: 'gm-user-projects',
  styleUrl: 'my-component.scss',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() nickname: string;
  @State() data: [];

  async componentWillRender() {
    this.data = getFilteredProjects(await httpWrapper(this.nickname));
  }
  
  render() {
    return (
      <Host>
        <h1>Projects</h1>
        <ul>
          {this.data.map((project: any) => 
            <li key={project.id}>
              <p>{project.language}</p>
              <a href={project.html_url} target="_blank">{project.name}</a>
            </li>
          )}
        </ul>
      </Host>
    );
  }
}
