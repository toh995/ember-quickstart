import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
    model() {
        return ['Edsger W. Dijkstra', 'Bill Gates', 'Alan Turing'];
    }
}
