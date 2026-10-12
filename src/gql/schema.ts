export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar type represents a date and time with time zone offset information. */
  DateTime: { input: string; output: string; }
  /** The `Decimal` scalar type represents a decimal floating-point number with high precision. */
  Decimal: { input: number; output: number; }
  /** The `UUID` scalar type represents a Universally Unique Identifier (UUID) as defined by RFC 9562. */
  UUID: { input: string; output: string; }
};

export type AddSellerManagerDtoInput = {
  email: Scalars['String']['input'];
};

export type AddToCartDtoInput = {
  productId: Scalars['UUID']['input'];
  quantity: Scalars['Int']['input'];
};

/** Defines when a policy shall be executed. */
export type ApplyPolicy =
  /** After the resolver was executed. */
  | 'AFTER_RESOLVER'
  /** Before the resolver was executed. */
  | 'BEFORE_RESOLVER'
  /** The policy is applied in the validation step before the execution. */
  | 'VALIDATION';

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CartDto = {
  __typename?: 'CartDto';
  items: Array<CartItemDto>;
  totalPrice: Scalars['Decimal']['output'];
  totalQuantity: Scalars['Int']['output'];
};

export type CartItemDto = {
  __typename?: 'CartItemDto';
  isAvailable: Scalars['Boolean']['output'];
  lineTotal: Scalars['Decimal']['output'];
  product: ProductDto;
  quantity: Scalars['Int']['output'];
};

export type CategoryDto = {
  __typename?: 'CategoryDto';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
};

export type CategoryDtoFilterInput = {
  and?: InputMaybe<Array<CategoryDtoFilterInput>>;
  id?: InputMaybe<UuidOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<CategoryDtoFilterInput>>;
};

export type CategoryDtoSortInput = {
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
};

export type CheckoutDtoInput = {
  deliveryAddress: DeliveryAddressDtoInput;
};

export type CreateCategoryDtoInput = {
  name: Scalars['String']['input'];
};

export type CreateProductDtoInput = {
  categoryId: Scalars['UUID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Decimal']['input'];
  sellerId: Scalars['UUID']['input'];
  sku: Scalars['String']['input'];
  stock: Scalars['Int']['input'];
};

export type CreateReviewDtoInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['UUID']['input'];
  rating: Scalars['Int']['input'];
};

export type CreateSellerDtoInput = {
  name: Scalars['String']['input'];
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  neq?: InputMaybe<Scalars['Decimal']['input']>;
  ngt?: InputMaybe<Scalars['Decimal']['input']>;
  ngte?: InputMaybe<Scalars['Decimal']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  nlt?: InputMaybe<Scalars['Decimal']['input']>;
  nlte?: InputMaybe<Scalars['Decimal']['input']>;
};

export type DeliveryAddressDto = {
  __typename?: 'DeliveryAddressDto';
  addressLine: Scalars['String']['output'];
  apartment?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  recipientName: Scalars['String']['output'];
};

export type DeliveryAddressDtoFilterInput = {
  addressLine?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<DeliveryAddressDtoFilterInput>>;
  apartment?: InputMaybe<StringOperationFilterInput>;
  city?: InputMaybe<StringOperationFilterInput>;
  comment?: InputMaybe<StringOperationFilterInput>;
  country?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DeliveryAddressDtoFilterInput>>;
  phone?: InputMaybe<StringOperationFilterInput>;
  postalCode?: InputMaybe<StringOperationFilterInput>;
  recipientName?: InputMaybe<StringOperationFilterInput>;
};

export type DeliveryAddressDtoInput = {
  addressLine: Scalars['String']['input'];
  apartment?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  recipientName: Scalars['String']['input'];
};

export type DeliveryAddressDtoSortInput = {
  addressLine?: InputMaybe<SortEnumType>;
  apartment?: InputMaybe<SortEnumType>;
  city?: InputMaybe<SortEnumType>;
  comment?: InputMaybe<SortEnumType>;
  country?: InputMaybe<SortEnumType>;
  phone?: InputMaybe<SortEnumType>;
  postalCode?: InputMaybe<SortEnumType>;
  recipientName?: InputMaybe<SortEnumType>;
};

export type ImageDto = {
  __typename?: 'ImageDto';
  largeUrl: Scalars['String']['output'];
  smallUrl: Scalars['String']['output'];
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type ListFilterInputTypeOfOrderItemDtoFilterInput = {
  all?: InputMaybe<OrderItemDtoFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<OrderItemDtoFilterInput>;
  some?: InputMaybe<OrderItemDtoFilterInput>;
};

export type ListFilterInputTypeOfProductImageDtoFilterInput = {
  all?: InputMaybe<ProductImageDtoFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ProductImageDtoFilterInput>;
  some?: InputMaybe<ProductImageDtoFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  activateProduct?: Maybe<ProductDto>;
  addSellerManager: SellerMemberDto;
  addToCart: CartDto;
  cancelOrder?: Maybe<OrderDto>;
  checkout: Array<OrderDto>;
  clearCart: CartDto;
  confirmOrderDelivery?: Maybe<OrderDto>;
  createCategory: CategoryDto;
  createProduct: ProductDto;
  createReview: ReviewDto;
  createSeller: SellerDto;
  deleteCategory: Scalars['Boolean']['output'];
  deleteProduct: Scalars['Boolean']['output'];
  deleteReview: Scalars['Boolean']['output'];
  deleteSeller: Scalars['Boolean']['output'];
  removeFromCart: CartDto;
  removeSellerMember: Scalars['Boolean']['output'];
  shipOrder?: Maybe<OrderDto>;
  updateCartItem: CartDto;
  updateCategory?: Maybe<CategoryDto>;
  updateOrderDeliveryAddress?: Maybe<OrderDto>;
  updateProduct?: Maybe<ProductDto>;
  updateReview?: Maybe<ReviewDto>;
  updateSeller?: Maybe<SellerDto>;
};


export type MutationActivateProductArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationAddSellerManagerArgs = {
  input: AddSellerManagerDtoInput;
  sellerId: Scalars['UUID']['input'];
};


export type MutationAddToCartArgs = {
  input: AddToCartDtoInput;
};


export type MutationCancelOrderArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationCheckoutArgs = {
  input: CheckoutDtoInput;
};


export type MutationConfirmOrderDeliveryArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryDtoInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductDtoInput;
};


export type MutationCreateReviewArgs = {
  input: CreateReviewDtoInput;
};


export type MutationCreateSellerArgs = {
  input: CreateSellerDtoInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteSellerArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationRemoveFromCartArgs = {
  productId: Scalars['UUID']['input'];
};


export type MutationRemoveSellerMemberArgs = {
  sellerId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};


export type MutationShipOrderArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationUpdateCartItemArgs = {
  input: UpdateCartItemDtoInput;
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateCategoryDtoInput;
};


export type MutationUpdateOrderDeliveryAddressArgs = {
  id: Scalars['UUID']['input'];
  input: DeliveryAddressDtoInput;
};


export type MutationUpdateProductArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateProductDtoInput;
};


export type MutationUpdateReviewArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateReviewDtoInput;
};


export type MutationUpdateSellerArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateSellerDtoInput;
};

/** A connection to a list of items. */
export type MyOrdersConnection = {
  __typename?: 'MyOrdersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<MyOrdersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<OrderDto>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type MyOrdersEdge = {
  __typename?: 'MyOrdersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: OrderDto;
};

/** A connection to a list of items. */
export type MyReviewsConnection = {
  __typename?: 'MyReviewsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<MyReviewsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ReviewDto>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type MyReviewsEdge = {
  __typename?: 'MyReviewsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ReviewDto;
};

export type OrderDto = {
  __typename?: 'OrderDto';
  buyer: UserSummaryDto;
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deliveredAt?: Maybe<Scalars['DateTime']['output']>;
  deliveryAddress: DeliveryAddressDto;
  id: Scalars['UUID']['output'];
  items: Array<OrderItemDto>;
  seller: SellerDto;
  shippedAt?: Maybe<Scalars['DateTime']['output']>;
  status: OrderStatus;
  totalAmount: Scalars['Decimal']['output'];
};

export type OrderDtoFilterInput = {
  and?: InputMaybe<Array<OrderDtoFilterInput>>;
  buyer?: InputMaybe<UserSummaryDtoFilterInput>;
  canceledAt?: InputMaybe<DateTimeOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  deliveredAt?: InputMaybe<DateTimeOperationFilterInput>;
  deliveryAddress?: InputMaybe<DeliveryAddressDtoFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  items?: InputMaybe<ListFilterInputTypeOfOrderItemDtoFilterInput>;
  or?: InputMaybe<Array<OrderDtoFilterInput>>;
  seller?: InputMaybe<SellerDtoFilterInput>;
  shippedAt?: InputMaybe<DateTimeOperationFilterInput>;
  status?: InputMaybe<OrderStatusOperationFilterInput>;
  totalAmount?: InputMaybe<DecimalOperationFilterInput>;
};

export type OrderDtoSortInput = {
  buyer?: InputMaybe<UserSummaryDtoSortInput>;
  canceledAt?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  deliveredAt?: InputMaybe<SortEnumType>;
  deliveryAddress?: InputMaybe<DeliveryAddressDtoSortInput>;
  id?: InputMaybe<SortEnumType>;
  seller?: InputMaybe<SellerDtoSortInput>;
  shippedAt?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
  totalAmount?: InputMaybe<SortEnumType>;
};

export type OrderItemDto = {
  __typename?: 'OrderItemDto';
  lineTotal: Scalars['Decimal']['output'];
  productId: Scalars['UUID']['output'];
  productName: Scalars['String']['output'];
  productSku: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  unitPrice: Scalars['Decimal']['output'];
};

export type OrderItemDtoFilterInput = {
  and?: InputMaybe<Array<OrderItemDtoFilterInput>>;
  lineTotal?: InputMaybe<DecimalOperationFilterInput>;
  or?: InputMaybe<Array<OrderItemDtoFilterInput>>;
  productId?: InputMaybe<UuidOperationFilterInput>;
  productName?: InputMaybe<StringOperationFilterInput>;
  productSku?: InputMaybe<StringOperationFilterInput>;
  quantity?: InputMaybe<IntOperationFilterInput>;
  unitPrice?: InputMaybe<DecimalOperationFilterInput>;
};

export type OrderStatus =
  | 'CANCELED'
  | 'CREATED'
  | 'DELIVERED'
  | 'SHIPPED';

export type OrderStatusOperationFilterInput = {
  eq?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  neq?: InputMaybe<OrderStatus>;
  nin?: InputMaybe<Array<OrderStatus>>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type ProductDto = {
  __typename?: 'ProductDto';
  category: CategoryDto;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  images: Array<ProductImageDto>;
  isActive: Scalars['Boolean']['output'];
  mainImage?: Maybe<ImageDto>;
  name: Scalars['String']['output'];
  price: Scalars['Decimal']['output'];
  rating: Scalars['Decimal']['output'];
  reviewCount: Scalars['Int']['output'];
  seller: SellerDto;
  sku: Scalars['String']['output'];
  stock: Scalars['Int']['output'];
};

export type ProductDtoFilterInput = {
  and?: InputMaybe<Array<ProductDtoFilterInput>>;
  category?: InputMaybe<CategoryDtoFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  images?: InputMaybe<ListFilterInputTypeOfProductImageDtoFilterInput>;
  isActive?: InputMaybe<BooleanOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProductDtoFilterInput>>;
  price?: InputMaybe<DecimalOperationFilterInput>;
  rating?: InputMaybe<DecimalOperationFilterInput>;
  reviewCount?: InputMaybe<IntOperationFilterInput>;
  seller?: InputMaybe<SellerDtoFilterInput>;
  sku?: InputMaybe<StringOperationFilterInput>;
  stock?: InputMaybe<IntOperationFilterInput>;
};

export type ProductDtoSortInput = {
  category?: InputMaybe<CategoryDtoSortInput>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isActive?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  price?: InputMaybe<SortEnumType>;
  rating?: InputMaybe<SortEnumType>;
  reviewCount?: InputMaybe<SortEnumType>;
  seller?: InputMaybe<SellerDtoSortInput>;
  sku?: InputMaybe<SortEnumType>;
  stock?: InputMaybe<SortEnumType>;
};

export type ProductImageDto = {
  __typename?: 'ProductImageDto';
  id: Scalars['UUID']['output'];
  largeUrl: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  smallUrl: Scalars['String']['output'];
};

export type ProductImageDtoFilterInput = {
  and?: InputMaybe<Array<ProductImageDtoFilterInput>>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<ProductImageDtoFilterInput>>;
  position?: InputMaybe<IntOperationFilterInput>;
};

/** A connection to a list of items. */
export type ProductReviewsConnection = {
  __typename?: 'ProductReviewsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductReviewsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ReviewDto>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ProductReviewsEdge = {
  __typename?: 'ProductReviewsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ReviewDto;
};

export type ProductSummaryDto = {
  __typename?: 'ProductSummaryDto';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
};

export type ProductSummaryDtoFilterInput = {
  and?: InputMaybe<Array<ProductSummaryDtoFilterInput>>;
  id?: InputMaybe<UuidOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProductSummaryDtoFilterInput>>;
};

export type ProductSummaryDtoSortInput = {
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ProductDto>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ProductsEdge = {
  __typename?: 'ProductsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductDto;
};

export type Query = {
  __typename?: 'Query';
  canReviewProduct: Scalars['Boolean']['output'];
  categories: Array<CategoryDto>;
  categoryById?: Maybe<CategoryDto>;
  me?: Maybe<UserDto>;
  myCart: CartDto;
  myOrders?: Maybe<MyOrdersConnection>;
  myReviews?: Maybe<MyReviewsConnection>;
  mySellers: Array<SellerMembershipDto>;
  orderById?: Maybe<OrderDto>;
  productById?: Maybe<ProductDto>;
  productReviews?: Maybe<ProductReviewsConnection>;
  products?: Maybe<ProductsConnection>;
  sellerById?: Maybe<SellerDto>;
  sellerMembers: Array<SellerMemberDto>;
  sellerOrders?: Maybe<SellerOrdersConnection>;
  sellerProducts?: Maybe<SellerProductsConnection>;
  sellers?: Maybe<SellersConnection>;
  users: Array<UserDto>;
};


export type QueryCanReviewProductArgs = {
  productId: Scalars['UUID']['input'];
};


export type QueryCategoriesArgs = {
  order?: InputMaybe<Array<CategoryDtoSortInput>>;
  where?: InputMaybe<CategoryDtoFilterInput>;
};


export type QueryCategoryByIdArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryMyOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderDtoSortInput>>;
  where?: InputMaybe<OrderDtoFilterInput>;
};


export type QueryMyReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ReviewDtoSortInput>>;
  where?: InputMaybe<ReviewDtoFilterInput>;
};


export type QueryOrderByIdArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryProductByIdArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryProductReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ReviewDtoSortInput>>;
  productId: Scalars['UUID']['input'];
  where?: InputMaybe<ReviewDtoFilterInput>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProductDtoSortInput>>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ProductDtoFilterInput>;
};


export type QuerySellerByIdArgs = {
  id: Scalars['UUID']['input'];
};


export type QuerySellerMembersArgs = {
  sellerId: Scalars['UUID']['input'];
};


export type QuerySellerOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderDtoSortInput>>;
  sellerId: Scalars['UUID']['input'];
  where?: InputMaybe<OrderDtoFilterInput>;
};


export type QuerySellerProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProductDtoSortInput>>;
  search?: InputMaybe<Scalars['String']['input']>;
  sellerId: Scalars['UUID']['input'];
  where?: InputMaybe<ProductDtoFilterInput>;
};


export type QuerySellersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<SellerDtoSortInput>>;
  where?: InputMaybe<SellerDtoFilterInput>;
};

export type ReviewDto = {
  __typename?: 'ReviewDto';
  author: UserSummaryDto;
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  product: ProductSummaryDto;
  rating: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewDtoFilterInput = {
  and?: InputMaybe<Array<ReviewDtoFilterInput>>;
  author?: InputMaybe<UserSummaryDtoFilterInput>;
  comment?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<ReviewDtoFilterInput>>;
  product?: InputMaybe<ProductSummaryDtoFilterInput>;
  rating?: InputMaybe<IntOperationFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type ReviewDtoSortInput = {
  author?: InputMaybe<UserSummaryDtoSortInput>;
  comment?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  product?: InputMaybe<ProductSummaryDtoSortInput>;
  rating?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

export type SellerDto = {
  __typename?: 'SellerDto';
  id: Scalars['UUID']['output'];
  logo?: Maybe<ImageDto>;
  name: Scalars['String']['output'];
  rating: Scalars['Decimal']['output'];
};

export type SellerDtoFilterInput = {
  and?: InputMaybe<Array<SellerDtoFilterInput>>;
  id?: InputMaybe<UuidOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SellerDtoFilterInput>>;
  rating?: InputMaybe<DecimalOperationFilterInput>;
};

export type SellerDtoSortInput = {
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  rating?: InputMaybe<SortEnumType>;
};

export type SellerMemberDto = {
  __typename?: 'SellerMemberDto';
  email: Scalars['String']['output'];
  joinedAt: Scalars['DateTime']['output'];
  role: SellerMemberRole;
  userId: Scalars['UUID']['output'];
  username: Scalars['String']['output'];
};

export type SellerMemberRole =
  | 'MANAGER'
  | 'OWNER';

export type SellerMembershipDto = {
  __typename?: 'SellerMembershipDto';
  role: SellerMemberRole;
  seller: SellerDto;
};

/** A connection to a list of items. */
export type SellerOrdersConnection = {
  __typename?: 'SellerOrdersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<SellerOrdersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<OrderDto>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type SellerOrdersEdge = {
  __typename?: 'SellerOrdersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: OrderDto;
};

/** A connection to a list of items. */
export type SellerProductsConnection = {
  __typename?: 'SellerProductsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<SellerProductsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ProductDto>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type SellerProductsEdge = {
  __typename?: 'SellerProductsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductDto;
};

/** A connection to a list of items. */
export type SellersConnection = {
  __typename?: 'SellersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<SellersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<SellerDto>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type SellersEdge = {
  __typename?: 'SellersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SellerDto;
};

export type SortEnumType =
  | 'ASC'
  | 'DESC';

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCartItemDtoInput = {
  productId: Scalars['UUID']['input'];
  quantity: Scalars['Int']['input'];
};

export type UpdateCategoryDtoInput = {
  name: Scalars['String']['input'];
};

export type UpdateProductDtoInput = {
  categoryId: Scalars['UUID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Decimal']['input'];
  stock: Scalars['Int']['input'];
};

export type UpdateReviewDtoInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
};

export type UpdateSellerDtoInput = {
  name: Scalars['String']['input'];
};

export type UserDto = {
  __typename?: 'UserDto';
  avatar?: Maybe<ImageDto>;
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  role: UserRole;
  username: Scalars['String']['output'];
};

export type UserRole =
  | 'ADMIN'
  | 'CUSTOMER';

export type UserSummaryDto = {
  __typename?: 'UserSummaryDto';
  avatar?: Maybe<ImageDto>;
  id: Scalars['UUID']['output'];
  username: Scalars['String']['output'];
};

export type UserSummaryDtoFilterInput = {
  and?: InputMaybe<Array<UserSummaryDtoFilterInput>>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<UserSummaryDtoFilterInput>>;
  username?: InputMaybe<StringOperationFilterInput>;
};

export type UserSummaryDtoSortInput = {
  id?: InputMaybe<SortEnumType>;
  username?: InputMaybe<SortEnumType>;
};

export type UuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  gt?: InputMaybe<Scalars['UUID']['input']>;
  gte?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  lt?: InputMaybe<Scalars['UUID']['input']>;
  lte?: InputMaybe<Scalars['UUID']['input']>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
  ngt?: InputMaybe<Scalars['UUID']['input']>;
  ngte?: InputMaybe<Scalars['UUID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  nlt?: InputMaybe<Scalars['UUID']['input']>;
  nlte?: InputMaybe<Scalars['UUID']['input']>;
};
