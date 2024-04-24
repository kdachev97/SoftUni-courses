import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IThemeModuleState } from '../+store';
import { themeListClear, themeListLoadPostList } from '../+store/actions';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnDestroy {

  postList$ = this.store.select(state => state.theme.list.postList);
  isLoading$ = this.store.select(state => state.theme.list.isLoading);

  constructor(
    private store: Store<IThemeModuleState>
  ) {
    this.store.dispatch(themeListLoadPostList());
  }

  ngOnDestroy(): void {
    this.store.dispatch(themeListClear());
  }
}