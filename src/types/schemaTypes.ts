import { GraphQLResolveInfo } from 'graphql';
import { Note, User } from '../types/model';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GQLCreateUserInput = {
  name: Scalars['String'];
  age: Scalars['Int'];
};

export type GQLMutation = {
   __typename?: 'Mutation';
  createUser: GQLUser;
};


export type GQLMutationCreateUserArgs = {
  input: GQLCreateUserInput;
};

export type GQLNote = {
   __typename?: 'Note';
  id: Scalars['String'];
  author: GQLUser;
  content: Scalars['String'];
};

export type GQLQuery = {
   __typename?: 'Query';
  note?: Maybe<GQLNote>;
  notes: Array<GQLNote>;
  user?: Maybe<GQLUser>;
  users: Array<GQLUser>;
};


export type GQLQueryNoteArgs = {
  id: Scalars['String'];
};


export type GQLQueryNotesArgs = {
  first?: Maybe<Scalars['Int']>;
};


export type GQLQueryUserArgs = {
  id: Scalars['String'];
};


export type GQLQueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
};

export type GQLUser = {
   __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
  age: Scalars['Int'];
  notes: Array<GQLNote>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type GQLResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Note: ResolverTypeWrapper<Note>,
  User: ResolverTypeWrapper<User>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Mutation: ResolverTypeWrapper<{}>,
  CreateUserInput: GQLCreateUserInput,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type GQLResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  Note: Note,
  User: User,
  Int: Scalars['Int'],
  Mutation: {},
  CreateUserInput: GQLCreateUserInput,
  Boolean: Scalars['Boolean'],
};

export type GQLMutationResolvers<ContextType = any, ParentType extends GQLResolversParentTypes['Mutation'] = GQLResolversParentTypes['Mutation']> = {
  createUser?: Resolver<GQLResolversTypes['User'], ParentType, ContextType, RequireFields<GQLMutationCreateUserArgs, 'input'>>,
};

export type GQLNoteResolvers<ContextType = any, ParentType extends GQLResolversParentTypes['Note'] = GQLResolversParentTypes['Note']> = {
  id?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>,
  author?: Resolver<GQLResolversTypes['User'], ParentType, ContextType>,
  content?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GQLQueryResolvers<ContextType = any, ParentType extends GQLResolversParentTypes['Query'] = GQLResolversParentTypes['Query']> = {
  note?: Resolver<Maybe<GQLResolversTypes['Note']>, ParentType, ContextType, RequireFields<GQLQueryNoteArgs, 'id'>>,
  notes?: Resolver<Array<GQLResolversTypes['Note']>, ParentType, ContextType, RequireFields<GQLQueryNotesArgs, never>>,
  user?: Resolver<Maybe<GQLResolversTypes['User']>, ParentType, ContextType, RequireFields<GQLQueryUserArgs, 'id'>>,
  users?: Resolver<Array<GQLResolversTypes['User']>, ParentType, ContextType, RequireFields<GQLQueryUsersArgs, never>>,
};

export type GQLUserResolvers<ContextType = any, ParentType extends GQLResolversParentTypes['User'] = GQLResolversParentTypes['User']> = {
  id?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>,
  age?: Resolver<GQLResolversTypes['Int'], ParentType, ContextType>,
  notes?: Resolver<Array<GQLResolversTypes['Note']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GQLResolvers<ContextType = any> = {
  Mutation?: GQLMutationResolvers<ContextType>,
  Note?: GQLNoteResolvers<ContextType>,
  Query?: GQLQueryResolvers<ContextType>,
  User?: GQLUserResolvers<ContextType>,
};


